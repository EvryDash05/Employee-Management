const sequelize = require("../database/db");
const { DataTypes } = require("sequelize");
//Models
const Task = require('../models/task');

const Employee = sequelize.define(
  "Employee",
  {
    employee_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    date_hire: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    employee_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    employee_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_task_complete: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    number_task_uncompleted: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    quantity_task: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    tableName: "tb_employees",
    timestamps: false,
  }
);

Employee.hasMany(Task, {
  foreignKey: 'employee_id',
  sourceKey: 'employee_id'
});
Task.belongsTo(Employee, {
  foreignKey: 'employee_id',
  targetKey: 'employee_id'
});

module.exports = Employee;