const { default: mongoose } = require("mongoose");
const courseSchema = require("./courseSchema");
const subscriptionSchema = require("./subscriptionSchema");

var db = {};

db.courseModel = mongoose.model("courses", courseSchema, "courses");
db.subscriptionModel = mongoose.model(
  "subscriptions",
  subscriptionSchema,
  "subscriptions"
);
module.exports = db;
