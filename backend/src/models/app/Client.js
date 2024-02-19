const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  source: String,
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: "Company",
    enum: ["company", "people"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    autopopulate: true,
  },
  people: {
    type: mongoose.Schema.ObjectId,
    ref: "People",
    autopopulate: true,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  assigned: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

clientSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Client", clientSchema);
