const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  ref: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  supplier: {
    type: mongoose.Schema.ObjectId,
    autopopulate: true,
    ref: "Supplier",
  },
  paymentMode: {
    type: mongoose.Schema.ObjectId,
    autopopulate: true,
    ref: "PaymentMode",
  },
  expenseCategory: {
    type: mongoose.Schema.ObjectId,
    autopopulate: true,
    required: true,
    ref: "ExpenseCategory",
  },
  taxRate: {
    type: String,
  },
  subTotal: {
    type: String,
  },
  taxTotal: {
    type: String,
  },
  total: {
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

expenseSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Expense", expenseSchema);
