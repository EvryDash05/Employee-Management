//Models
const Employee = require("../models/employee");
const EmployeeRole = require("../models/employeeRole");
//Service
const EmployeeService = require('./employeeService');

const getAllRoles = async () => {
  try {
    const roleList = await EmployeeRole.findAll({
      attributes: ["role_id", "role_name"],
    });
    return roleList;
  } catch (error) {
    return error.message;
  }
};

const getRoleByIdService = async (roleId) => {
  try {
    const role = await EmployeeRole.findOne({
      where: {
        roleId,
      },
    });
    return role;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

const createRole = async (roleData) => {
  try {
    const newRole = await EmployeeRole.create(
      {
        role_id: roleData.role_id,
        role_name: roleData.role_name,
      },
      {
        fields: ["role_id", "role_name"],
      }
    );
    return newRole;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

const deleteRoleById = async (roleId) => {
  try {
    await EmployeeRole.destroy({
      where: {
        roleId,
      },
    });
    return "Role " + roleId + " deleted";
  } catch (error) {
    return error.message;
  }
};

const getAllEmployeerByRole = async (roleId) => {
  try {
    const listEmployees = await EmployeeService.getAllEmployeerByIdRole(roleId)
    return listEmployees;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllRoles,
  getRoleByIdService,
  createRole,
  deleteRoleById,
  getAllEmployeerByRole,
};
