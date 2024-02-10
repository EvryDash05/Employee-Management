const express = require("express");

const taskCtrl = require("../controllers/task.controller");
const taskRouter = express.Router();

taskRouter
  .post("/createTask", taskCtrl.createTask)
  .get("/findTask/:taskId", taskCtrl.getTaskById);

module.exports = taskRouter;