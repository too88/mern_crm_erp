const express = require("express");

const appControllers = require("@/controllers/app");
const { routeList } = require("@/utils");

const router = express.Router();

const routerApp = (entity, controller) => {
  // get method
  router.route(`/${entity}/read/:id`).get(controller["read"]);
  router.route(`/${entity}/list`).get(controller["list"]);
  router.route(`/${entity}/search`).get(controller["search"]);

  // post method
  router.route(`/${entity}/create`).post(controller["create"]);

  // patch method
  router.route(`/${entity}/update/:id`).patch(controller["update"]);

  // delete method
  router.route(`/${entity}/delete/:id`).delete(controller["delete"]);
};

routeList.forEach(({ entity, controllerName }) => {
  const controller = appControllers[controllerName];
  routerApp(entity, controller);
});

module.exports = router;
