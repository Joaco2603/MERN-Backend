const {request,response} = require('express');
const bcrypt = require('bcryptjs');
const User = require("../models/Users");
const { verificarEmail } = require('../helpers/db-validators');

const get_controller = async(req=request,res=response)=>{

    const [total,usuarios] = await Promise.all([
    User.countDocuments({ estado: true }),
    User.find({ estado: true })
    ])

    res.json({
        total,
        usuarios
    })
}

const nuevo_usuario = async(req=request,res=response)=>{


    const {nombre,correo,password,rol} = req.body;
    const usuario = new User( {nombre,correo,password,rol} );
    console.log(correo)
    await verificarEmail(correo);

    //Hacer el hash de la contraseña o encriptarla
    const salt = bcrypt.genSaltSync(15);
    usuario.password = bcrypt.hashSync( password ,salt )

    await usuario.save();

    res.json(usuario)
}


module.exports = {
    get_controller,
    nuevo_usuario
}