const mongoose = require("mongoose")

const ProductoSchema = mongoose.Schema
({
    nombre: {type:String,unique:"true"},
    apaterno: String,
    aMaterno: String,
    expediente: Number,  
    email: String,
    curp: String
},{
    collection:"Personas",
    timestamps:true
})
const Persona = mongoose.model("Persona",ProductoSchema);

module.exports = Persona