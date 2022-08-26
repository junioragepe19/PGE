var Cadastro = require("../create_tables/cadastro")
var Nivel = require("../create_tables/nivel")
var Perfil = require("../create_tables/perfil")


exports.create_Perfil = (req, res) => {
    try{
        Perfil.create({
            id_Perfil: req.params.id_Perfil,
            usuario: req.params.usuario,
            senha: req.params.senha, 
            ativo: req.params.ativo,
            email: req.params.email
        })
        req.status(200).send("Perfil criado")
    }
    catch(error){
        res.status(400).send('Erro ao criar perfil')
    }
}