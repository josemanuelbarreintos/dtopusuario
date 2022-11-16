const mongoose = require("mongoose");
const UniqueValidator = require("mongoose-unique-validator")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")


const SchemaUsuario = mongoose.Schema({
    nombre : {
        type: String,
        unique: true,
        required:true
  
},  
email:{
        type: String,
        unique: true,
        required:true,
        match: [/\S+@\S+\.\S+/, "es inválido"],
        index: true
},
    username:{
        type: String,
        unique: true,
        required:true,
        lowercase:true,
        match: [/^[a-zA-Z0-9]+$/, "es inválido"],
        index: true
    },
    hash:String,
    salt:String,
    tarjeta:String,
    tipo:{
        type: String,
        enum: ['Administrador','Usuario']
    },
   }, {
    collection:"Usuarios",
    Timestamp: true
})

SchemaUsuario.plugin(UniqueValidator,{message: "El usuario ya existe"})
//////////////////funcion para crear la contraseña en hash///////////////
SchemaUsuario.methods.crearContrasena = function(password){
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000,512,"sha512")
    .toString("hex")
}
////////////////////////////////////////////////////////////////
/// proceso de validar contraseña///////////////////////////////
SchemaUsuario.methods.validarContrasena = function(password){
    const pass = crypto
    .pbkdf2Sync(password, this.salt, 10000,512,"sha512")
    .toString("hex")
    return pass === this.hash
}
//////////////////////////////////////////////////////////////
//configuracion del JWT para generar un token que dure los dias que sean definidos//
SchemaUsuario.methods.generaJWT = function(){
    const today = new Date();//fecha de inicio token
    const exp = new Date();//fecha de expiracion
    exp.setDate(today.getDate() + 7)
    return jwt.sign({
        id: this._id,
        username: this.username,
        expiracion: parseInt(expiracion.getTime()/1000)
    },process.env.SECRET)
}
///////////////////////////////////////////////////////////////////////////////////
////////////retorno de token de autenticacio jwt
SchemaUsuario.methods.toAuthJSON = function(){
    return{
        username: this.username,
        email: this.email,
        token: this.generaJWT(),
        tipo: this.tipo
    }
}
////////////////////////////////////////////////////
////////////////metodo seleccionar los datos que queremos que se muestren
SchemaUsuario.methods.publicData = function(){
    return{
        username: this.username,
        email: this.email,
        nombre: this.nombre,
        tipo: this.tipo
    }
}
/////////////////////////////////////////////////////////////////////////

const Usuario=mongoose.model("Usuarios", SchemaUsuario)
module.exports = Usuario;
