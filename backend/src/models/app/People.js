const mongoose = require('mongoose');
const { v4 } = require('uuid');

const peopleSchema = new mongoose.Schema({
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
    default: true,
  },
  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  isClient: {
    type: Boolean,
    default: false,
  },
  country: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    ref: 'Company',
  },
  phone: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  website: {
    type: String,
    trim: true,
    lowercase: true,
  },
  verified: {
    type: Boolean,
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

peopleSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('People', peopleSchema);
