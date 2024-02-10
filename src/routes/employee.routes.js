const express = require('express');

const employeeCtrl = require('../controllers/employee.controller');

const employeeRouter = express.Router();

employeeRouter
    .get('/:employeeId', employeeCtrl.getEmployeeById)
    .post('/createEmployee', employeeCtrl.createEmployee)
    //.delete('/delete/:employeeId', employeeCtrl.deleleteEmployeeByRoleId)
    .get(':employeeId/tasks', employeeCtrl.getTaskByEmployee)

module.exports = employeeRouter;