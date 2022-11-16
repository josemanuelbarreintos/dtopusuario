const mongoose = require("mongoose")

const db ='dtop'
const dbUser ='root'
const dbPass ='root123'

const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.q7nkavz.mongodb.net/${db}?retryWrites=true&w=majority`
mongoose.connect(uri);

///////////////////////////////// Mostrar tablas de la base funciona como un select///////////////////
// const ProductoSchema = mongoose.Schema
// ({
//     nombre: {type:String,unique:"true"},
//     apaterno: String,
//     aMaterno: String,
//     expediente: Number,  
//     email: String,
//     curp: String
// },{
//     collection:"Personas",
//     timestamps:true
// })
// const Persona = mongoose.model("Persona",ProductoSchema);

// function obtenerProductos(){
//     Persona.find()
//     .then(data => console.log(data) )
// }
// obtenerProductos();
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////insert///////////////////////////////
// function crearPersona(persona){
//     const per = new Persona(persona);
//     per.save()
//         .then(res => console.log(res))
// }

// const info = {
//     nombre:"Manuel",
//     apaterno: "Barrientos",
//     aMaterno: "Quintero",
//     expediente: 72416,  
//     email: "josum1053@gmail.com",
//     curp: "BAQM930119HMCRNN00"
// }

//  crearPersona(info);
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////obtener filtros/////////////
// function obtenerPersona(expediente){
//     const query = {
//         "expediente":{
//             "$lte":expediente
//         }
//     }
//     Persona.find(query)
//     .then(data => console.log(data))
// }
// // obtenerPersona(72417);
///////////////////////////////////////////////////////////////////////
/////////////////////////ejemplo con tres agrugaciones filtrar campos, menores que el expediente, y ordenar de mayor a menor//
// function agregacion(expediente){
//     const agr =[
//         {
//           '$project': {
//             'nombre': 1, 
//             'expediente': 1, 
//             '_id': 0
//           }
//         }, {
//           '$match': {
//             'expediente': {
//               '$lte': expediente
//             }
//           }
//         }, {
//           '$sort': {
//             'expediente': -1
//           }
//         }
//       ]
//     Persona.aggregate(agr)
//     .then(data => console.log(data))
// }
// agregacion(72417);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


