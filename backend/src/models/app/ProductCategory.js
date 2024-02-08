const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
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
    default: false,
  },
  color: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    require: true,
  },
  description: String,
  title: String,
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ProductCategory', productCategorySchema);
