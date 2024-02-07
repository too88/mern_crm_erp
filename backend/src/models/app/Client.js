const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  source: String,
  category: String,
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  branchs: [
    {
      type: String,
      ref: "Branch",
    },
  ],
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
    type: String,
    ref: "Company",
    autopopulate: true,
  },
  people: {
    type: String,
    ref: "People",
    autopopulate: true,
  },
  createdBy: {
    type: String,
    ref: "Admin",
  },
  assigned: {
    type: String,
    ref: "Admin",
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
