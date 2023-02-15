importScripts("https://cdn.jsdelivr.net/npm/idb@7/build/umd.js");
importScripts("./src/js/db.js");
// Replace 3.6.3 with the current version number of Workbox.
//No precaching is supported
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

//Storing all the png images using cachFirst Strategy
workbox.routing.registerRoute(
  new RegExp(".png$"),
  workbox.strategies.cacheFirst({
    cacheName: "images-cache",
  })
);

workbox.routing.registerRoute(
  /.*(?:googleapis|gstatic)\.com.*$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "google-fonts",
    cacheExpiration: {
      maxEntries: 3,
      maxAgeSeconds: 60 * 60 * 24 * 30,
    },
  })
);

workbox.routing.registerRoute(
  "https://code.getmdl.io/1.3.0/material.deep_purple-pink.min.css",
  workbox.strategies.staleWhileRevalidate({
    cacheName: "material-css",
  })
);

workbox.routing.registerRoute("http://localhost:3000/courses", function (args) {
  return fetch(args.event.request).then(function (res) {
    var clonedRes = res.clone();
    clearAllData("courses")
      .then(function () {
        return clonedRes.json();
      })
      .then(function (data) {
        for (var key in data) {
          db.writeData("courses", data[key]);
        }
      });
    return res;
  });
});

workbox.routing.registerRoute(
  function (routeData) {
    return routeData.event.request.headers.get("accept").includes("text/html");
  },
  function (args) {
    return caches.match(args.event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(args.event.request)
          .then(function (res) {
            return caches.open("dynamic").then(function (cache) {
              cache.put(args.event.request.url, res.clone());
              return res;
            });
          })
          .catch(function (err) {
            return caches.match("/offline.html").then(function (res) {
              return res;
            });
          });
      }
    });
  }
);

var staticCache = "static_cache";
self.addEventListener("install", function (event) {
  console.log("Service worker getting installed", event);
});

self.addEventListener("activate", function (event) {
  console.log("service worker activated", event);
  event.waitUntil(
    fetch("http://localhost:3000/courses")
      .then((response) => {
        console.log("Got courses", response);
        return response.json();
      })
      .then((value) => {
        return db.writeData("sync-courses", value.data);
      })
  );
  //return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  // console.log("service worker fetching data", event);
  event.respondWith(
    caches.open(staticCache).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request.url);
      });
    })
  );
  // event.respondWith(fetch(event.request));
});

self.addEventListener("sync", function (event) {
  console.log("Background syncing", event);
  if (event.tag === "sync-new-courses") {
    event.waitUntil(
      db.readAllData("sync-courses").then(function (data) {
        for (var course of data) {
          fetch("http://localhost:3000/course", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              courseName: course.courseName,
              courseDesciption: course.courseDesciption,
            }),
          })
            .then(function (response) {
              if (response.ok) {
                response.json(function (responseData) {
                  db.deleteData("sync-courses", responseData.id);
                });
              }
            })
            .catch((error) => {
              console.log("error while syncing data", error);
            });
        }
      })
    );
  }
});
