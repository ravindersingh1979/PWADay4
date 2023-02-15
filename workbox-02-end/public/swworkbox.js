importScripts("https://cdn.jsdelivr.net/npm/idb@7/build/umd.js");
importScripts("./src/js/db.js");
importScripts("./src/js/workbox/workbox-v6.5.4/workbox-sw.js");

workbox.setConfig({
  modulePathPrefix: "/src/js/workbox/workbox-v6.5.4/workbox-sw.js",
});
workbox.precaching.precacheAndRoute([
  { revision: "fb8713423e6e13372368d607d8645200", url: "favicon.ico" },
  { revision: "a8425c123130d4d0dc24387f2ee4234f", url: "help/index.html" },
  { revision: "b0e88381f43854fb806d77f8633591c5", url: "index.html" },
  { revision: "920d8c8fbd8529929bb859c4ca3d1368", url: "manifest.json" },
  { revision: "33489801037cf7d5fa392911774633ca", url: "offline.html" },
  { revision: "6ffbd13380eea51af16c29758ea98630", url: "src/css/app.css" },
  { revision: "729d4d24de8f530a402372b7eecb9ec6", url: "src/css/feed.css" },
  { revision: "1c6d81b27c9d423bece9869b07a7bd73", url: "src/css/help.css" },
  { revision: "d36a02d866b2ab5c7f3745e46aefc46b", url: "src/css/styles.css" },
  {
    revision: "60aa56f0b069c8446c3a2857978a2724",
    url: "src/images/android-desktop.png",
  },
  {
    revision: "680eaca6af54de743d08b413ebb4c4b9",
    url: "src/images/favicon.png",
  },
  {
    revision: "1df4afc7e60004843740efc0112fa172",
    url: "src/images/icons/app-icon-144x144.png",
  },
  {
    revision: "ef1d342dde4d6fae4b12a88693331b94",
    url: "src/images/icons/app-icon-192x192.png",
  },
  {
    revision: "57c75c47bca5886792dc550a00f3780e",
    url: "src/images/icons/app-icon-48x48.png",
  },
  {
    revision: "538df85c6aa7db891345536a58142b14",
    url: "src/images/icons/app-icon-512x512.png",
  },
  {
    revision: "869dfc39e28511e65361451018489fd2",
    url: "src/images/icons/app-icon-96x96.png",
  },
  {
    revision: "bb641ec7447d6cc89c96ef09d64e1970",
    url: "src/images/icons/apple-icon-180x180.png",
  },
  {
    revision: "a2cdce82ff3e7af9a0abcd242d3f2ec7",
    url: "src/images/ios-desktop.png",
  },
  { revision: "85656bcac2f0fed36023671300a4eebc", url: "src/js/app.js" },
  { revision: "e2bc96e7755c98bb2e1cc377852ae5a5", url: "src/js/db.js" },
  { revision: "54e6847d3699f99bf2a8444ccd8895da", url: "src/js/feed.js" },
  {
    revision: "713af0c6ce93dbbce2f00bf0a98d0541",
    url: "src/js/material.min.js",
  },
  {
    revision: "936faa6487ffc1650a9150f9988e4215",
    url: "src/js/workbox/workbox-v6.5.4/workbox-background-sync.dev.js",
  },
  {
    revision: "53473f3d96e712b9a002d70a62d15fba",
    url: "src/js/workbox/workbox-v6.5.4/workbox-background-sync.prod.js",
  },
  {
    revision: "6041074b871fe4c262f5f31f1b269aa4",
    url: "src/js/workbox/workbox-v6.5.4/workbox-broadcast-update.dev.js",
  },
  {
    revision: "404608a5bdaa085c8cb4b6543f19985d",
    url: "src/js/workbox/workbox-v6.5.4/workbox-broadcast-update.prod.js",
  },
  {
    revision: "77deabe6c722c38a92fb5d39a84793dc",
    url: "src/js/workbox/workbox-v6.5.4/workbox-cacheable-response.dev.js",
  },
  {
    revision: "d1a28efd8683882980a5bc3e2d514e49",
    url: "src/js/workbox/workbox-v6.5.4/workbox-cacheable-response.prod.js",
  },
  {
    revision: "69554f9465f0f5603d01b7614f228e1a",
    url: "src/js/workbox/workbox-v6.5.4/workbox-core.dev.js",
  },
  {
    revision: "26a82243c21f9b819b3888a784f390c9",
    url: "src/js/workbox/workbox-v6.5.4/workbox-core.prod.js",
  },
  {
    revision: "9a05753529d8c36e962ee1c11bfa04dd",
    url: "src/js/workbox/workbox-v6.5.4/workbox-expiration.dev.js",
  },
  {
    revision: "c656020670208660b10b68795bb0d5b6",
    url: "src/js/workbox/workbox-v6.5.4/workbox-expiration.prod.js",
  },
  {
    revision: "2ba1f62ee20f1fb8294941546539f35d",
    url: "src/js/workbox/workbox-v6.5.4/workbox-navigation-preload.dev.js",
  },
  {
    revision: "2fd701b3662ce2b289925485a358c218",
    url: "src/js/workbox/workbox-v6.5.4/workbox-navigation-preload.prod.js",
  },
  {
    revision: "94ebc9652e6adbe96fa8e1a709e1ba20",
    url: "src/js/workbox/workbox-v6.5.4/workbox-offline-ga.dev.js",
  },
  {
    revision: "e794d9377c41c486d9b795dbe0c56a78",
    url: "src/js/workbox/workbox-v6.5.4/workbox-offline-ga.prod.js",
  },
  {
    revision: "d715c9759d526ac5356ad62ea87a0dd2",
    url: "src/js/workbox/workbox-v6.5.4/workbox-precaching.dev.js",
  },
  {
    revision: "e05249397035853935551ae71d9d6d1c",
    url: "src/js/workbox/workbox-v6.5.4/workbox-precaching.prod.js",
  },
  {
    revision: "273ec7f82d0ceb75d98c3e2c351bf038",
    url: "src/js/workbox/workbox-v6.5.4/workbox-range-requests.dev.js",
  },
  {
    revision: "21bfe07ef929cd0f6951721204ead3c0",
    url: "src/js/workbox/workbox-v6.5.4/workbox-range-requests.prod.js",
  },
  {
    revision: "d578fd8724dd553c554c952693f74ed2",
    url: "src/js/workbox/workbox-v6.5.4/workbox-recipes.dev.js",
  },
  {
    revision: "6f38b6b9fa48426ec0750ca7143dba8f",
    url: "src/js/workbox/workbox-v6.5.4/workbox-recipes.prod.js",
  },
  {
    revision: "f99c8e47f12bea7a254401e1e7f0cd1a",
    url: "src/js/workbox/workbox-v6.5.4/workbox-routing.dev.js",
  },
  {
    revision: "969a4a29f98e81c7e50faaf39b3e4d3a",
    url: "src/js/workbox/workbox-v6.5.4/workbox-routing.prod.js",
  },
  {
    revision: "e3383c60eb5187dfcfeaedee8d1674ee",
    url: "src/js/workbox/workbox-v6.5.4/workbox-strategies.dev.js",
  },
  {
    revision: "9ec33bdeb1efa35de8e64f4b14d565ca",
    url: "src/js/workbox/workbox-v6.5.4/workbox-strategies.prod.js",
  },
  {
    revision: "c0c92bd3695e961fc6b1bebbe6b681f9",
    url: "src/js/workbox/workbox-v6.5.4/workbox-streams.dev.js",
  },
  {
    revision: "ff927c6a24fe142b968b6353bf62eb00",
    url: "src/js/workbox/workbox-v6.5.4/workbox-streams.prod.js",
  },
  {
    revision: "d6e9eb44a24f1e781164287002302b0c",
    url: "src/js/workbox/workbox-v6.5.4/workbox-sw.js",
  },
  {
    revision: "3b22c2679fd5e640dda2f5ec247955a9",
    url: "src/js/workbox/workbox-v6.5.4/workbox-window.dev.umd.js",
  },
  {
    revision: "f11ac68db84b173d796c6e3eeb74ec49",
    url: "src/js/workbox/workbox-v6.5.4/workbox-window.prod.umd.js",
  },
  { revision: "4315340b077ac595ce60ecbdfab428ed", url: "sw_cache_only.js" },
  {
    revision: "6698f9aeb0508a2d1cc9e51089c088a2",
    url: "sw_cache_then_network.js",
  },
  { revision: "29700892c983e7c261b3f5843049af07", url: "sw_inline_workbox.js" },
  { revision: "561bc4e4abd60792732a8a015639c266", url: "sw_network_only.js" },
  {
    revision: "4662fc7ac4b2f0608fe2fbccd725d8f5",
    url: "sw_network_then_cache.js",
  },
  {
    revision: "73ca6f1c4619967e25d454c8cd07c4d7",
    url: "sw_stale_while_ravalidate.js",
  },
]);

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
