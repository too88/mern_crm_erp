const login = require("@/services/common/auth/login");
const register = require("@/services/common/auth/register");
const verify = require("@/services/common/auth/verify");

const createAuthController = () => {
  let authMethods = {};

  authMethods.login = (req, res) => login(req, res)
  authMethods.register = (req, res) => register(req, res)
  authMethods.verify = (req, res) => verify(req, res)

  return authMethods;
};

module.exports = createAuthController();
