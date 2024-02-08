const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
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
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  isClient: {
    type: Boolean,
    default: false,
  },
  peoples: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'People',
      autopopulate: true,
    },
  ],
  mainContact: {
    type: mongoose.Schema.ObjectId,
    ref: 'People',
    autopopulate: true,
  },
  country: {
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
  phone: {
    type: String,
    trim: true,
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

companySchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Company', companySchema);
