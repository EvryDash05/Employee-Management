const Task = require("../models/task");

const createTask = async (taskData) => {
  try {
    const newTask = await Task.create(
      {
        task_id: taskData.task_id,
        task_description: taskData.task_description,
        task_publication_date: new Date(),
        task_status: taskData.task_status,
        task_title: taskData.task_title,
        employee_id: taskData.employee_id,
      },
      {
        fields: [
            "task_id",
            "task_description",
            "task_publication_date",
            "task_status",
            "task_title",
            "employee_id"
        ],
      }
    );
    return newTask;
  } catch (error) {
    return error.message;
  }
};

const getTaskById = async (taskId) => {
  try {
    const task = await Task.findByPk(taskId);
    return task;
  } catch (error) {
    return error.message;
  }
};

const getTaskByEmployeeId = async (employeeId) => {
  try {
    const task = await Task.findOne({
      where: { employee_id: employeeId },
    });
    return task;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createTask,
  getTaskById,
  getTaskByEmployeeId
};
