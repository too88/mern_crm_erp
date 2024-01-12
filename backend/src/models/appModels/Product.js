const mongoose = require('mongoose');
const { v4 } = require('uuid');

const { schema } = require('./ProductCategory');

const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: v4(),
  },
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: false,
  },
  productCategory: {
    type: String,
    ref: 'ProductCategory',
    require: true,
    autopopulate: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: String,
  number: {
    type: Number,
    unique: true,
  },
  title: String,
  tags: [String],
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
  isPublic: {
    type: Boolean,
    default: true,
  },
});

schema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Product', productSchema);
