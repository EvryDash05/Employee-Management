const Employee = require("../models/employee");

const createEmployee = async (employeeData) => {
  try {
    const newEmployee = await Employee.create(
      {
        employee_id: employeeData.employee_id,
        date_hire: new Date(),
        employee_email: employeeData.employee_email,
        employee_name: employeeData.employee_name,
        role_id: employeeData.role_id,
      },
      {
        fields: [
          "employee_id",
          "date_hire",
          "employee_email",
          "employee_name",
          "role_id",
        ],
      }
    );
    return newEmployee;
  } catch (error) {
    return error;
  }
};

const getAllEmployeerByIdRole = async (roleId) => {
  try {
    const employees = await Employee.findAll({
      where: { role_id: roleId },
    });
    return employees;
  } catch (error) {
    return error;
  }
};

const getEmployeeById = async (employeeId) => {
  try {
    const employee = await Employee.findOne({
      where: { employee_id: employeeId },
    });
    return employee;
  } catch (error) {
    return error.message;
  }
};

const deleleteEmployeeByRoleId = async (roleId) => {
  try {
    Employee.destroy({
      where: { role_id: roleId },
    });
    return `Employee deleted`;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createEmployee,
  getAllEmployeerByIdRole,
  getEmployeeById,
  deleleteEmployeeByRoleId,
};
