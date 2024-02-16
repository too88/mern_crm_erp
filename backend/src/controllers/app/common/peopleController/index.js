require("module-alias/register");

const createCRUDController = require("@/controllers/app/common");
const paginatedList = require("@/controllers/app/common/peopleController/paginatedList");

function peopleController() {
  const peopleMethods = createCRUDController("People");

  peopleMethods.list = (req, res) => paginatedList(req, res);

  return peopleMethods;
}

module.exports = peopleController();
