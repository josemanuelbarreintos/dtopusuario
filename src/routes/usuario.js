const routeU = require("express").Router()

const{
    login,
    agregarUsuario,
    obtenerUsuarios,
    obtenerTodosUsuarios
}= require("../controllers/usuarios");


const auth = require("./auth");

routeU.get("/", obtenerTodosUsuarios)
routeU.get("/privado",auth.requerido, obtenerUsuarios)
routeU.post("/login", login)
routeU.post("/", agregarUsuario)

module.exports = routeU;