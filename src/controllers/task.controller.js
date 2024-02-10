const taskService = require("../service/taskService");

const createTask = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const newTask = await taskService.createTask(data);
    return res.status(200).json({
      message: `Task created successfully`,
      data: newTask,
    });
  } catch (error) {
    res.status(500).json({
      message: `Task creation failed`,
      error: error,
    });
  }
};

const getTaskById = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await taskService.getTaskById(taskId);
    return res.status(200).json({
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erro to find task ${taskId}`,
      error: error,
    });
  }
};

module.exports = {
  createTask,
  getTaskById,
};
