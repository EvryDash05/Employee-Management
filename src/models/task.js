const sequelize = require("../database/db");
const { DataTypes } = require("sequelize");

const Task = sequelize.define(
  "Task",
  {
    task_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    task_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    task_publication_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    task_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    task_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tb_task",
    timestamps: false,
  }
);

module.exports = Task;
