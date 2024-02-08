const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  // branchs: [
  //   {
  //     type: String,
  //     ref: "Branch",
  //   },
  // ],
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
  surname: {
    type: String,
    lowercase: true,
  },
  role: {
    type: String,
    default: "staff",
    enum: ["superAdmin", "admin", "staffAdmin", "staff", "createOnly", "readOnly"],
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

module.exports = mongoose.model("Admin", adminSchema);
