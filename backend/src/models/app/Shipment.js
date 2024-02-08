const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
    required: true,
  },
  assigned: {
    type: mongoose.Schema.ObjectId,
    ref: "Employee",
  },
  order: {
    type: mongoose.Schema.ObjectId,
    ref: "Order",
  },
  date: {
    type: Date,
    required: true,
  },
  client: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
  },
  invoice: {
    type: mongoose.Schema.ObjectId,
    ref: "Ivoince",
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: String,
        required: true,
      },
    },
  ],
  approved: {
    type: Boolean,
    default: false,
  },
  note: {
    type: String,
  },
  status: {
    type: String,
    enum: [
      "pending",
      "confirmed",
      "in transit",
      "out for delivery",
      "delivered",
      "returned",
      "failed",
      "cancelled",
    ],
    default: "pending",
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

shipmentSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Shipment", shipmentSchema);
