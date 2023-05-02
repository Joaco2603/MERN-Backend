
//Schemas
const User = require('../models/Users');
const product = require('../models/SchemaProducts')
//Verifica el email si lo consigue
const verificarEmail = async(correo='')=>{
    const existeEmail = await User.findOne({correo});
    if( existeEmail ){
    throw new Error(`El correo:${correo} ya esta registrado`)
}
}
//Busca el id y verifica que exista
const existeUsuarioPorID = async(id ='')=>{
    const existeID = await User.findById(id);
    if( !existeID ){
    // return res.status(400).json({
    //     err: "El correo ya esta registrado"
    // })
    throw new Error(`El id:${id} no existe`)
    }
}


const existeObjectoPorID = async(id ='')=>{
    const existeID = await product.findById(id);
    if( !existeID ){
    // return res.status(400).json({
    //     err: "El correo ya esta registrado"
    // })
    throw new Error(`El id:${id} no existe`)
    }
}

const verificarImg = async(img='')=>{

    const base = img.split(':').pop()
    const tipo = base.split(';')
    console.log(tipo[0])

    
    if(tipo[0] != 'image/png' && 'image/jpg' &&'image/svg'&&'image/bmp'&&'image/jpeg'){
        throw new Error(`No es una imagen o imagen valida`)
    }

}

module.exports = {
    verificarEmail,
    existeUsuarioPorID,
    existeObjectoPorID,
    verificarImg
}