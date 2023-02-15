const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  endpoint: { type: String },
  expirationTime: { type: String },
  keys: { type: Object },
});
