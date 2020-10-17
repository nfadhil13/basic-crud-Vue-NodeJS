const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Artikel = sequelize.define('artikel',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING(100),
        allowNull : false
    },
    content: {
        type : Sequelize.TEXT,
        allowNull : false
    }
    }
)

module.exports = Artikel