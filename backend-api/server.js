const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./db/schemas/index");
const webpush = require("web-push");
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect

  connectTimeoutMS: 45000, //10000 // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};
const server = express();

server.use(cors());
server.use(express.json());
webpush.setVapidDetails(
  "mailto:singhravi1979@gmail.com",
  "BJMLtMrMVVakwuPXJchPyX8-beqNRcybNtonzDr6NWbxhBwbSGVadNHMb6U_0YLBdJgCcNQj3LIV738tJFbXXOQ",
  "20sDkpcARgVCxz7t95TEircT6KRLJlWtJWMYOi552hU"
);
server.get("/courses", (req, res, next) => {
  let course = {
    id: 001,
    courseName: "Learning PWA",
    courseDescription:
      "Learn the basics of PWA and service workers, background sync and web push notifications",
  };
  res.status(200).send({ data: course });
});

server.post("/course", (req, res, next) => {
  console.log("got the request", req);
  let course = {
    courseName: req.body.courseName,
    courseDescription: req.body.courseDescription,
  };
  db.courseModel.create(course).then((dbcourse) => {
    res.status(200).send({ data: dbcourse });
  });
});

server.get("/subscriptions", (req, res, next) => {
  return db.subscriptionModel.find({}).then((subscriptions) => {
    res.status(200).send({ data: subscriptions });
  });
});

server.post("/subscription", (req, res, next) => {
  console.log("got the request", req);
  let subscription = {
    ...req.body,
  };
  return db.subscriptionModel.create(subscription).then((subscription) => {
    res.status(200).send({ data: subscription });
  });
});
/*
title: "New Post",
content: "New Post added!",
openUrl: "/help"
*/
server.get("/sendnotifications", (req, res, next) => {
  return db.subscriptionModel.find({}).then((subscriptions) => {
    var promises = [];
    subscriptions.forEach((subscription) => {
      promises.push(
        webpush.sendNotification(
          subscription,
          JSON.stringify({
            title: "New Course",
            content: "new course added",
            openUrl: "/index",
          })
        )
      );
    });
    return Promise.all(promises)
      .then((result) => {
        res.status(200).send({ data: "notifications sent" });
      })
      .catch((err) => res.status(500).send({ error: err }));
  });
});
const url =
  "mongodb://pwauser:E3zPYybQ68J4aOB7@ac-6vugqz1-shard-00-00.8q6shof.mongodb.net:27017,ac-6vugqz1-shard-00-01.8q6shof.mongodb.net:27017,ac-6vugqz1-shard-00-02.8q6shof.mongodb.net:27017/?ssl=true";
mongoose.connect(url, options, function (error) {
  console.log(error);
  // Check error in initial connection. There is no 2nd param to the callback.
});
server.listen(3000, () => {
  console.log("server listening on port 3000");
});
