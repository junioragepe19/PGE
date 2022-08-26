const { Sequelize } = require("sequelize");
var database = require('../banco');
const Perfil = require("perfil");

var Cadastro = db.define('Cadastro', {
    id_Info: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    primero_Nome: {
        type: Sequelize.VARCHAR(20),
        allowNull: false,
    },
    ultimo_Nome: {
        type: Sequelize.VARCHAR(20),
        allowNull: false,
    },
    cpf: {
        type: Sequelize.VARCHAR(11),
        allowNull: false,
    },
    numero: {
        type: Sequelize.VARCHAR(13),
        allowNull: false,
    },
    id_Perfil: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})

Cadastro.belongsTo(Perfil, {
    foreignKey: "id_Perfil"
})

module.exports = Cadastro;