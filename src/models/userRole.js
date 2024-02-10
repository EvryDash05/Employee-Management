const sequelize = require("../database/db");
const { DataTypes } = require("sequelize");
const { User } = require("./user");

const ROLES = ["user", "admin", "invited"];

const UserRole = sequelize.define(
  "UserRoles",
  {
    user_role_id: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    role_name: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    tableName: "tb_user_roles",
    timestamps: false,
  }
);

// Después de importar User y UserRole
UserRole.hasMany(User, {
  foreignKey: "user_role_id",
  sourceKey: "user_role_id",
});

User.belongsTo(UserRole, {
  foreignKey: "user_role_id",
  targetKey: "user_role_id",
});

module.exports = { UserRole, ROLES };
