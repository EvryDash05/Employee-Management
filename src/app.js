const express = require("express");

//Import routes
const roleRouter = require("./routes/employeeRole.routes");
const employeeRouter = require("./routes/employee.routes");
const taskRouter = require("./routes/task.routes");
const authRouter = require("./routes/auth.routes");

//App configuration
const app = express();

app.use(express.json());

//Routes
app.use('/api/roles', roleRouter);
app.use('/api/employees', employeeRouter);
app.use('/api/task', taskRouter);
app.use('/api/auth', authRouter);

module.exports = app;
