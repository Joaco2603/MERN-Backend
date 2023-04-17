const express = require('express');
const cors = require('cors');
const {connectDB} = require('../db/config');


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080
        this.tienda = '/tienda';

        this.middlewares();
        this.routes();
        this.MongoConnect();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use(this.tienda,require('../routes/routes'))
    }
    async MongoConnect(){
        await connectDB();
    }
    listen(){
        this.app.listen(this.port,()=>console.log(`Conectado en el puerto ${this.port}`))
    }
}

module.exports = Server;