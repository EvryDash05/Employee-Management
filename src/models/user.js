const sequelize = require("../database/db");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

const User = sequelize.define(
  "User",
  {
    user_id: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    user_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tb_users",
    timestamps: false,
  }
);

async function encryptPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const encrypt = await bcrypt.hash(password, salt);
  console.log(encrypt);
  return encrypt;
}

async function comparePassword(password, recivedPassword) {
  return await bcrypt.compare(password, recivedPassword);
}

module.exports = { User, encryptPassword, comparePassword };
