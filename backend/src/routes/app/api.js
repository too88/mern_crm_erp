const express = require('express');

const appControllers = require('@/controllers/app');
const { routeList } = require('@/utils');

const router = express.Router();

const routerApp = (entity, controller) => {
  router.route(`/${entity}/list`).get(controller['list']);
};

routeList.forEach(({ entity, controllerName }) => {
  const controller = appControllers[controllerName];
  routerApp(entity, controller);
});

module.exports = router;
