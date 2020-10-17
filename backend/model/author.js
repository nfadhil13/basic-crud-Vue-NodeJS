const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Author = sequelize.define('author',{

    username: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true
    }}
)

module.exports = Author