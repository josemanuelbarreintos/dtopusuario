const Usuario = require("../modules/Usuario");
const passport = require('passport')

function login(req, res){
    const email = req.body.email;
    const pass = req.body.pass;
    passport.authenticate("local",{session: false}, (err, user,info) => {
        if(err) return err
        if (user){
            user.token = user.generaJWT();
            return res.json({user: user.toAuthJSON()});
        }else{
            return res.status(422).json(info)
        }
    })(req, res)
}
/////////////funcion para probar el logeo
function agregarUsuario(req,res){
    const usuario = new Usuario(req.body)
    const pass = req.body.password

    usuario.crearContrasena(pass);
    usuario.save()
    .then(data => res.status(200).send(data))
}

function obtenerUsuarios(req,res){
   if(!req.auth)
   res.sendStatus(401)
    Usuario.findById(req.auth.id)
    .then(user =>{
        res.send(user.publicData())
    })
}
function obtenerTodosUsuarios(req,res){
   
     Usuario.find()
     .then(user =>{
         res.status(200).send(user)
     })
 }
module.exports ={
    login,
    agregarUsuario,
    obtenerUsuarios,
    obtenerTodosUsuarios
}