const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const Usuarios = require("../modules/Usuario")

passport.use(new LocalStrategy({
    usernameField : "email",
    passwordField : "password"
}, function(email,password,done){
    Usuario.findOne({email : email})
    .then(usuario => {
        if(!usuario || !usuario.validarContrasena(password))
        return done(null,false, {errors :{"email o contraeña":"equibocad(a)"}})
        return done(null,usuario)
    })
    .catch(done)
}))