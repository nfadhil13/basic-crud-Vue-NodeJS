const { Sequelize } = require("sequelize");

const config = require("./dbconfig")

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  dialect: config.dialect,
  host: config.host,
  port: config.port,
});


module.exports = sequelize;