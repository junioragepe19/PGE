const { Sequelize } = require("sequelize");
var database = require('../banco');
const Perfil = require("perfil");

var Nivel = db.define('Nivel', {
    id_Nivel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    num_Nivel: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_Perfil: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

Nivel.belongsTo(Perfil, {
    foreignKey: "id_Perfil"
})

module.exports = Nivel;