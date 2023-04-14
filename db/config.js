const moongose = require('mongoose');

const connectDB = async()=>{
    try {

        await moongose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("Base de datos conectada")

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connectDB
};