const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: false,
  },
  branch: {
    type: mongoose.Schema.ObjectId,
    ref: "Branch",
  },
  isAdmin: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
  },
  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  gender: String,
  taxNumber: String,
  birthday: Date,
  notes: String,
  status: String,
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
    type: Number,
  },
  country: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  approved: {
    type: Boolean,
  },
  verified: {
    type: Boolean,
  },
  tag: [
    {
      type: String,
      trim: true,
      lowercase: true,
    },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

employeeSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Employee", employeeSchema);
