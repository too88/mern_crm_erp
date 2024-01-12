const mongoose = require('mongoose');
const { v4 } = require('uuid');

const productCategorySchema = new mongoose.Schema({
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
  name: {
    type: String,
    require: true,
  },
  description: String,
  title: String,
  tags: [String],
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

module.exports = mongoose.model('ProductCategory', productCategorySchema);
