const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  number: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  content: String,
  expiredDate: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  client: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
    required: true,
    autopopulate: true,
  },
  items: [
    {
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
      total: {
        type: Number,
      },
    },
  ],
  processString: String,
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
    required: true,
  },
  taxRate: {
    type: Number,
  },
  subTotal: {
    type: Number,
  },
  taxTotal: {
    type: Number,
  },
  total: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  note: {
    type: String,
  },
  status: {
    type: String,
    enum: ["draft", "pending", "sent", "accepted", "declined", "cancelled", "on hold"],
    default: "draft",
  },
  isExpired: {
    type: Boolean,
    default: false,
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

quoteSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Quote", quoteSchema);
