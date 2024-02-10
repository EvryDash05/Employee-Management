//Service imports
const employeeService = require("../service/employeeService");
const taskService = require("../service/taskService");

const createEmployee = async (req, res) => {
  const data = req.body;

  try {
    const newEmployee = await employeeService.createEmployee(data);
    res.status(200).json({
      message: `Employee created successfully`,
      employee: newEmployee,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error creating employee`,
    });
  }
};

const getEmployeeById = async (req, res) => {
  const { employeeId } = req.params;
  try {
    const employee = await employeeService.getEmployeeById(employeeId);
    return res.status(200).json({
      employee: employee,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error getting employee`,
      erro: error.message,
    });
  }
};

const getTaskByEmployee = async (employeeId) => {
  try {
    const taskList = await taskService.getTaskByEmployeeId(employeeId);
    return res.status(200).json({
      taskList,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error to get task by employee ${employee}`,
      error: error,
    });
  }
};

const updateEmployeeById = (req, res) => {};

module.exports = {
  createEmployee,
  getEmployeeById,
  getTaskByEmployee
};
