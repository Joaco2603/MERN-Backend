const {request,response} = require('express');
const User = require("../models/Users");
const bcrypt = require('bcryptjs');
const {generarJWT} = require('../helpers/generateJWT')

const sign = async(req=request,res=response)=>{

    const {correo,password} = req.body;

    const usuario = await User.findOne({ correo });
    console.log(usuario.id)

    
            //Generar el JWT
            const token = await generarJWT(usuario.id);

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
                usuario, 
                token
            })
}


module.exports = {
    sign
}