const express = require("express");
const employeeRoleController = require("../controllers/employeeRole.controller");
const authMiddleware = require("../middlewares/authjwt");

const employeeRoleRouter = express.Router();

employeeRoleRouter
  .get("/roleList", employeeRoleController.getAllRoles)
  .get("/getRole/:role_id", employeeRoleController.getRoleById)
  .get("/:roleId/employees", employeeRoleController.getEmployeesRole)
  .post("/createRole", [authMiddleware.verifyToken, authMiddleware.isAdmin], employeeRoleController.createRole)
  .delete("/deleteRole/:role_id", [authMiddleware.verifyToken, authMiddleware.isAdmin], employeeRoleController.deleteRoleById);

module.exports = employeeRoleRouter;