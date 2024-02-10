const employeeRole = require("../service/employeeRoleService");

const getAllRoles = async (req, res) => {
  try {
    const roleList = await employeeRole.getAllRoles();
    res.status(200).json(roleList);
  } catch (error) {
    res.status(404).json({
      message: "List not found",
    });
  }
};

const getRoleById = async (req, res) => {
  const { roleId } = req.params;
  try {
    const role = await employeeRole.getRoleByIdService(roleId);
    res.status(200).json(role);
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

const createRole = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const newRole = await employeeRole.createRole(data);
    res.status(200).json({
      message: "Role created successfully",
      data: newRole,
    });
  } catch (error) {
    res.status(501).json({
      message: "Error to create role",
      data: newRole,
    });
  }
};

const getEmployeesRole = async (req, res) => {
  const { roleId } = req.params;
  try {
    const listEmployees = await employeeRole.getAllEmployeerByRole(roleId);
    res.status(200).json({ listEmployees });
  } catch (error) {
    res.status().json({
      message: error.message,
    });
  }
};

const deleteRoleById = async (req, res) => {
  const { roleId } = req.params;
  employeeRole
    .deleteRoleById(roleId)
    .then((response) => {
      res.json({
        message: response,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
};

module.exports = {
  getAllRoles,
  getRoleById,
  createRole,
  deleteRoleById,
  getEmployeesRole,
};
