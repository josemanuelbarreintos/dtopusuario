const { response } = require("express");
const Persona = require("../modules/Persona")

//Obtiene todos los datos de l json "como un select*from"
function obtenerPersonas(req, res){
    Persona.find()
    .then(data =>{
        res.status(200).send(data);
    })
}
//insercion a base de datos de json "como un insert"
function crearPersona(req,res){
    const info = req.body;
    const pers = new Persona(info)
    pers.save()
    .then(data => res.send(data))
}
// Delete de la base de datos
function eliminaPersona(req,res){
    const name = req.body.nombre;
    Persona.findOneAndDelete({nombre:name})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
}

// Modificar en la tabla "update"
function modificarPersona(req,res){
    const name = req.params.nombre;
    console.log(name);
    const nuevaInfo = req.body;
    Persona.findOne({nombre:name})
    .then(persona =>{
       
            for (const key in nuevaInfo) {
                persona[key] = nuevaInfo[key];
            }
         persona.save()
        .then(data => {res.status(200).send(data);})
    })
}

module.exports =
{
    obtenerPersonas,
    crearPersona,
    modificarPersona,
    eliminaPersona
}