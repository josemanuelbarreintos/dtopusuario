const routerP = require("express").Router();
const {
    obtenerPersonas,
    crearPersona,
    modificarPersona,
    eliminaPersona
} = require("../controllers/personas");

routerP.get("/",obtenerPersonas)
routerP.post("/",crearPersona)
routerP.put("/:nombre",modificarPersona)
routerP.delete("/",eliminaPersona)

module.exports = routerP;