const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // _id: {
  //   type: String,
  //   default: v4(),
  // },
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  productCategory: {
    type: mongoose.Schema.ObjectId,
    ref: 'ProductCategory',
    required: true,
    autopopulate: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: String,
  title: String,
  priceBeforeTax: {
    type: Number,
  },
  taxRate: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
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

productSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Product', productSchema);
