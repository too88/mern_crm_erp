const login = require("@/services/common/auth/login");
const register = require("@/services/common/auth/register");
const verify = require("@/services/common/auth/verify");
const logout = require("@/services/common/auth/logout");
const isValidAuthToken = require("@/services/common/auth/isValidAuthToken");

const createAuthController = () => {
  let authMethods = {};

  authMethods.isValidAuthToken = (req, res, next) => isValidAuthToken(req, res, next, {});
  authMethods.login = (req, res) => login(req, res);
  authMethods.register = (req, res) => register(req, res);
  authMethods.verify = (req, res) => verify(req, res);
  authMethods.logout = (req, res) => logout(req, res);
  return authMethods;
};

module.exports = createAuthController();
