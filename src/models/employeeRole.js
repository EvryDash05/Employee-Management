const sequelize = require("../database/db");
const { DataTypes } = require("sequelize");
const Employee = require('../models/employee');

const EmployeeRole = sequelize.define(
  "EmployeeRole",
  {
    role_id: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    role_name: {
      type: DataTypes.STRING,
      notNull: true,
    },
  },
  {
    tableName: "tb_roles",
    timestamps: false
  }
);

EmployeeRole.hasMany(Employee, {
  foreignKey: 'role_id',
  sourceKey: 'role_id'
});

Employee.belongsTo(EmployeeRole, {
  foreignKey: 'role_id',
  targetKey: 'role_id'
});

module.exports = EmployeeRole;