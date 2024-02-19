const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  number: {
    type: Number,
    unique: true,
    required: true,
  },
  assigned: {
    type: mongoose.Schema.ObjectId,
    ref: "Employee",
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
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
    autopopulate: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
      itemName: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      discount: {
        type: Number,
        default: 0,
      },
      total: {
        type: Number,
      },
      note: {
        type: String,
      },
    },
  ],
  processString: String,
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  shipment: {
    type: mongoose.Schema.ObjectId,
    ref: "Shipment",
  },
  note: {
    type: String,
  },
  fulfillment: {
    type: String,
    enum: ["pending", "in review", "processing", "packing", "shipped", "on hold", , "cancelled"],
    default: "pending",
  },
  status: {
    type: String,
    enum: [
      "not started",
      "in progress",
      "delayed",
      "completed",
      "delivered",
      "returned",
      "cancelled",
      "on hold",
      "refunded",
    ],
    default: "not started",
  },
  approved: {
    type: Boolean,
    default: false,
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

orderSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Order", orderSchema);
