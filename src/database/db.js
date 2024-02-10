const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('db_employees', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;