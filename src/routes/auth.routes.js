const express = require("express");

const authRouter = express.Router();
const authController = require("../controllers/auth.controller");
const verifySignup = require("../middlewares/verifySignup");

authRouter
  .post(
    "/signin",
    [
      verifySignup.checkDuplicateUsernameOrEmailm,
      verifySignup.checkRolesExisted,
    ],
    authController.signIn
  )
  .post(
    "/signup",
    [
      verifySignup.checkDuplicateUsernameOrEmailm,
      verifySignup.checkRolesExisted,
    ],
    authController.signUp
  );

module.exports = authRouter;
