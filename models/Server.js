const express = require('express');
const cors = require('cors');
const {connectDB} = require('../db/config');


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080

        this.middlewares();
        this.routes();
        this.MongoConnect();
    }
    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(cors());
    }
    routes(){

    }
    async MongoConnect(){
        await connectDB();
    }
    listen(){
        this.app.listen(this.port,()=>console.log(`Conectado en el puerto ${this.port}`))
    }
}

module.exports = Server;