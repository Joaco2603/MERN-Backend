const {request,response} = require('express');
const User = require("../models/Users");
const bcrypt = require('bcryptjs');

const sign = async(req,res=response)=>{

    const {correo,password} = req.body;

    const usuario = await User.findOne({ correo });
        if ( !usuario ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos'
            });
        }

        // SI el usuario está activo
        if ( !usuario.estado ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos'
            });
        }

        // Verificar la contraseña
        const validPassword = bcrypt.compareSync( password, usuario.password );
        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos'
            });
        }

    res.json({
        msg:"Mensaje",
    })
}


module.exports = {
    sign
}