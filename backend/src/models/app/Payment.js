const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
  client: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
    required: true,
    autopopulate: true,
  },
  invoice: {
    type: mongoose.Schema.ObjectId,
    ref: "Invoice",
    required: true,
    autopopulate: true,
  },
  paymentMode: {
    type: mongoose.Schema.ObjectId,
    ref: "PaymentMode",
    autopopulate: true,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
    required: true,
  },
  ref: {
    type: String,
  },
  description: {
    type: String,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

paymentSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Payment", paymentSchema);
