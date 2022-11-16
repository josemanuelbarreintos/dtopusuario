const mongoose = require("mongoose")

const mostrarDatos = mongoose.Schema
({
   nombres:String,
   rfc:String,
   nivel:String,
   numeroContact:Number
},{
    collection:"Consulta_usuarios",
    timestamps:true
})
const consultaUsuarios = mongoose.model("Consulta_usuarios",mostrarDatos);

module.exports = consultaUsuarios
