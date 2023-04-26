//Utilizamos express-validator 
const {validationResult} = require('express-validator')

const validarCampos = (req,res,next)=>{
    const errors = validationResult(req);
    //si err es diferente de vacio  
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    //continuar
    next();
}

module.exports = {
    validarCampos
}