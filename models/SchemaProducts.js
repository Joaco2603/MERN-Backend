const {Schema,model} = require('mongoose')

const SchemaProducts = Schema({

    correo:{
        type:String,
        require:[true,"El correo es necesario"]
    },
    producto:{
        type:String,
        require:[true,"El producto es requerido"]
    },
    desc:{
        type:String,
    },
    img:{
        type:String
    },
    estado:{
        type:Boolean,
        default:true
    }
})

SchemaProducts.methods.toJSON = function(){
    const{__v,...producto} = this.toObject();
    return producto 
}


module.exports = model('Product',SchemaProducts)