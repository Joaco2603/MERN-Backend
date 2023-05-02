//Require los npms 
const {request,response} = require('express');
const bcrypt = require('bcryptjs');
const User = require("../models/Users");
const { verificarEmail } = require('../helpers/db-validators');
const {generarJWT} = require('../helpers/generateJWT')

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


    const {nombre,correo,password,img,rol} = req.body;
    const usuario = new User( {nombre,correo,password,img,rol} );
    console.log(correo)
    await verificarEmail(correo);

    //Hacer el hash de la contraseña o encriptarla
    const salt = bcrypt.genSaltSync(15);
    usuario.password = bcrypt.hashSync( password ,salt )

    await usuario.save();

    const token = await generarJWT(usuario.id);

    res.json({
        usuario,
        token
    })


}


module.exports = {
    get_controller,
    nuevo_usuario
}