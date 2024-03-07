const express = require("express");

const { hasPermission } = require("@/middlewares/authorization/permission");
const { routeList } = require("@/utils");
const appControllers = require("@/controllers");

const router = express.Router();

const routerApp = (entity, controller) => {
  // get method
  router.route(`/${entity}/read/:id`).get(hasPermission("read"), controller["read"]);
  router.route(`/${entity}/list`).get(hasPermission("read"), controller["list"]);
  router.route(`/${entity}/search`).get(hasPermission("read"), controller["search"]);

  // post method
  router.route(`/${entity}/create`).post(hasPermission("create"), controller["create"]);

  // patch method
  router.route(`/${entity}/update/:id`).patch(hasPermission("update"), controller["update"]);

  // delete method
  router.route(`/${entity}/delete/:id`).delete(hasPermission("delete"), controller["delete"]);
};

routeList.forEach(({ entity, controllerName }) => {
  const controller = appControllers[controllerName];
  routerApp(entity, controller);
});

module.exports = router;
