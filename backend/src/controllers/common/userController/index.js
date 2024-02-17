const mongoose = require("mongoose");

const paginatedList = require("../../../services/common/user/paginatedList");

const createUserController = () => {
  const Model = mongoose.model("Admin");

  const userServiceList = {
    list: (req, res) => paginatedList(Model, req, res),
  };

  return userServiceList;
};

module.exports = createUserController();
