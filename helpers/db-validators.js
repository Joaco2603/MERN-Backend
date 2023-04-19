

const Products = require('../models/SchemaProducts');

const verificarEmail = async(correo='')=>{
    const existeEmail = await User.findOne({correo});
    if( existeEmail ){
    throw new Error(`El correo:${correo} ya esta registrado`)
}
}

const existeUsuarioPorID = async(id ='')=>{
    const existeID = await Products.findById(id);
    if( !existeID ){
    // return res.status(400).json({
    //     err: "El correo ya esta registrado"
    // })
    throw new Error(`El id:${id} no existe`)
    }
}

module.exports = {
    verificarEmail,
    existeUsuarioPorID
}