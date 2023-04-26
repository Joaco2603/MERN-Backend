const {Schema,model} = require('mongoose');

//Creamos el schema
const UserSchema =Schema({
    nombre:{
        type:String,
        require:[true,'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatorio']
    },
    img:{
        type:String,
    },
    rol:{
        type:String,
        required:true,
        emun: ['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    },

})

//Filtramos la informacion que se devuelve con funciones de mongoDb
UserSchema.methods.toJSON = function(){
    const {__v,password,...usuario} = this.toObject();
    return usuario
}

module.exports = model('User',UserSchema);