const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminPasswordSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  emailToken: String,
  resetToken: String,
  emailVerified: {
    type: Boolean,
    default: false,
  },
  authType: {
    type: String,
    default: "email",
  },
  loggedSessions: {
    type: [String],
    default: [],
  },
});

// Hashing password
adminPasswordSchema.methods.generateHash = function(salt, password) {
  return bcrypt.hashSync(salt + password)
}

// Validation password
adminPasswordSchema.methods.validPassword = function(salt, userPassword) {
  return bcrypt.compareSync(salt + userPassword, this.password)
}

module.exports = mongoose.model("AdminPassword", adminPasswordSchema);
