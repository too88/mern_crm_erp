const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  name: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    ref: "Employee",
    required: true,
  },
  admin: {
    type: String,
    ref: "Admin",
    required: true,
  },
  employees: [
    {
      type: String,
      ref: "Employee",
      required: true,
    },
  ],
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  country: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  isPublic: {
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

module.exports = mongoose.model("Branch", branchSchema);
