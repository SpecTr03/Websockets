const express = require('express')
const cors = require('cors');
const { socketController } = require('../sockets/controller');


//Creando servidor
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //Exportaciones de socketio
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        //Direcciones URL de nuestra app
        this.paths = {
            
        }

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();

        //Sockets
        this.sockets();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //Director publico
        //Sirviendo el contenido de la carpeta para mostrarlo en la pagina web como la pag principal
        this.app.use(express.static('public'));

    }

    //Enlazando el archivo routes con el server(para que el servidor entienda que rutas tiene)
    routes() {
    }

    sockets() {
        this.io.on('connection', socketController);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }


}

module.exports = Server;