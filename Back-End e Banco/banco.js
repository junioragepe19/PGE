var Sequelize = require('sequelize')

var connection = new Sequelize('pgedb','root','senhatestepge',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    define: {
        timestamps: false
    }
})

module.exports = connection;