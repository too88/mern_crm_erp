const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
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
  year: {
    type: Number,
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
        default: 1,
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
        required: true
      },
    },
  ],
  content: String,
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
    required: true,
  },
  lead: {
    type: mongoose.Schema.ObjectId,
    ref: "Lead",
    required: true,
    autopopulate: true,
  },
  offer: [
    {
      itemName: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
      },
    },
  ],
  taxRate: {
    type: Number,
    default: 0,
  },
  subTotal: {
    type: Number,
    default: 0,
  },
  subOfferTotal: {
    type: Number,
  },
  taxTotal: {
    type: Number,
    default: 0,
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
    enum: ["draft", "pending", "sent", "refunded", "cancelled", "on hold"],
    default: "draft",
  },
  payment: [
    {
        type: mongoose.Schema.ObjectId,
        ref: "Payment"
    }
  ],
  approved: {
    type: Boolean,
    default: false,
  },
  expiredDate: {
    type: Date,
    required: true,
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

invoiceSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Invoice", invoiceSchema);
