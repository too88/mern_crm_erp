const express = require("express");

const appControllers = require("@/controllers/app");
const { routeList } = require("@/utils");

const router = express.Router();

const routerApp = (entity, controller) => {
  router.route(`/${entity}/read/:id`).get(controller["read"]);
  router.route(`/${entity}/list`).get(controller["list"]);
  router.route(`/${entity}/create`).post(controller["create"]);
};

routeList.forEach(({ entity, controllerName }) => {
  const controller = appControllers[controllerName];
  routerApp(entity, controller);
});

module.exports = router;
