const routeU = require("express").Router()

const{
    login,
    agregarUsuario,
    obtenerUsuarios
}= require("../controllers/usuarios");


const auth = require("./auth");

routeU.get("/",auth.requerido, obtenerUsuarios)
routeU.post("/login", login)
routeU.post("/", agregarUsuario)

module.exports = routeU;