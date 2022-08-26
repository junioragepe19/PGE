const { Sequelize } = require("sequelize");
var database = require('../banco');

var Perfil = database.define('Perfil', {
    id_Perfil: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    usuario: {
        type: Sequelize.VARCHAR(15),
        allowNull: false,
    },

    senha: {
        type: Sequelize.VARCHAR(50),
        allowNull: false,
    },

    ativo: {
        type: Sequelize.TINYINT,
        allowNull: false,
    },

    email: {
        type: Sequelize.VARCHAR(45),
        allowNull: false,
    }
})

module.exports = Perfil;