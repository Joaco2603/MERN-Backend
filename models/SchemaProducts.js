const {Schema,model} = require('mongoose')

//Creamos un schema
const SchemaProducts = Schema({

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

//Filtramos la informacion que retorna de la base de datos
SchemaProducts.methods.toJSON = function(){
    const{__v,...producto} = this.toObject();
    return producto 
}


module.exports = model('Product',SchemaProducts)