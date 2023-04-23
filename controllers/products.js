const  {request,response} = require('express')
const Product = require('../models/SchemaProducts')


const get_Products = async(req=request,res=response)=>{
    const [total,products] = await Promise.all([
        Product.countDocuments({ estado: true }),
        Product.find({ estado: true })
        ])
    
        res.json({
            total,
            products
        })
}

const createProduct = async(req=request,res=response)=>{

    const {correo,producto,desc,img} = req.body;
    const product = new Product( {correo,producto,desc,img} );

    await product.save();

    res.json(product)
}


const modificar = async(req,res)=>{

    const {id} = req.params;
    const {_id, ...resto}=req.body

    const usuario = await Product.findByIdAndUpdate(id,resto);
    
    res.json({
        msg: 'put controller',
        usuario
    }) 

}

const deleteProduct = async(req,res)=>{
    const { id } = req.params;

    // const uid = req.uid;
    
    //Eliminacion fisica
    // const usuario = await Usuario.findByIdAndDelete(id);

    const usuario = await Product.findByIdAndUpdate(id,{estado:false});

    res.json({
        usuario
    })
}


const carrito = async(req,res)=>{
     
    const {id} = req.params;
    const producto = await Product.findById(id)

    res.json({
        producto
    })

}

module.exports = {
    createProduct,
    modificar,
    deleteProduct,
    get_Products,
    carrito
}