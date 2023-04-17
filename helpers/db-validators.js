

const User = require('../models/Users');

const verificarEmail = async(correo='')=>{
    const existeEmail = await User.findOne({correo});
    if( existeEmail ){
    throw new Error(`El correo:${correo} ya esta registrado`)
}
}

module.exports = {
    verificarEmail
}