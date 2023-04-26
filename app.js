
//Utiliza variables de entorno
require('dotenv').config();
const Server = require('./models/Server')
//creamos un nuevo objeto que es el que prende el server
const server = new Server();

//Utilizamos el metodo listen y prendemos server
server.listen();