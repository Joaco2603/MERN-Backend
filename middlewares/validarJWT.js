
const { response, request } = require('express')
const jwt = require('jsonwebtoken')

const User = require('../models/Users')

const validarJWT = async(req=request,res=response,next)=>{

    const token = req.header('json-token');

    if(!token){
        return res.status(401).json({
            msg:"No hay token en la peticion"
        })
    }

    try {


        const {uid} = jwt.verify(token,process.env.SECRETORPRIVATEKEY)

        Usuario = await User.findById(uid);
        req.uid = Usuario
        next();
    } catch (err) {
        res.status(401).json({
            msg:'Token no valido'
        })
    }

}

module.exports = {
    validarJWT
}