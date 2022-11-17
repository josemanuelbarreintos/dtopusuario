const {expressjwt: jwt} = require('express-jwt')

function getTokenFromHeader(req) {
    const aut = req.headers.authorization
    let auSplit;
    if (aut) 
        auSplit = aut.split(' ')
    else 
        return null
    if(aut && auSplit[0] === 'Token' || 
        aut && auSplit[0] === 'Bearer'){
            return auSplit[1]
        }
        
        return null
}

const auth = {
    requerido: jwt({
        secret: process.env.SECRET,
        algorithms : ["HS256"],
        userProperty: "usuario",
        getToken: getTokenFromHeader
    }), 
    opcional: jwt({
        secret: process.env.SECRET,
        algorithms : ["HS256"],
        userProperty: "usuario",
        getToken: getTokenFromHeader,
        credentialsRequired: false
    })
}
module.exports = auth;