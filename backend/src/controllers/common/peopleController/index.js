require("module-alias/register");

const createCRUDController = require("@/controllers/app");
const paginatedList = require("@/services/common/people/paginatedList");

function peopleController() {
  const peopleMethods = createCRUDController("People");

  peopleMethods.list = (req, res) => paginatedList(req, res);

  return peopleMethods;
}

module.exports = peopleController();
