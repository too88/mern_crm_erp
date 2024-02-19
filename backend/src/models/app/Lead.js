const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
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
    enum: ["Company", "People"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  company: {
    type: mongoose.Schema.ObjectId,
    red: "Company",
    autopopulate: true,
  },
  people: {
    type: mongoose.Schema.ObjectId,
    red: "People",
    autopopulate: true,
  },
  offer: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Offer",
    },
  ],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  subTotal: {
    type: Number,
  },
  taxTotal: {
    type: Number,
  },
  total: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  status: String,
  notes: String,
  source: String,
  approved: {
    type: Boolean,
    default: false,
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

leadSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Lead', leadSchema);