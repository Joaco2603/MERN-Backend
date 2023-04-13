const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080

        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(cors());
    }
    routes(){

    }
    listen(){
        this.app.listen(this.port,()=>console.log(`Conectado en el puerto ${this.port}`))
    }
}

module.exports = Server;