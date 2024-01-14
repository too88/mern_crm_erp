const mongoose = require('mongoose');

const { allModelFileList } = require('@/utils');

const paginatedList = require('./paginatedList');

const createCRUDService = (modelName) => {
  if (!allModelFileList.includes(modelName)) {
    throw new Error(`Model ${modelName} does not exists`);
  }

  const Model = mongoose.model(modelName);

  const serviceList = {
    list: (req, res) => paginatedList(Model, req, res),
  };

  return serviceList;
};

module.exports = createCRUDService;
