const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../databases/config.db');
const path = require('path');



class Server { 

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.mutantesPath = '/api/mutantes';

        //Conectar a base de datos

        this.conectarDB();

        //Middleware
        this.middlewares();
        
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    routes() {

        this.app.use( this.mutantesPath , require('../routes/mutantes.route'));

        
        
    }

    middlewares(){

        //CORS
        this.app.use( cors() );

        //Lectura y parseo del body, cualquier peticion PUT POST DELETE la va a convertir a un formato JSON 
        this.app.use( express.json());

        //Directorio Publico
        this.app.use( express.static( 'public' ) );

        
        
        this.app.get('*', ( req, res ) => {

            res.sendFile(path.resolve('public/index.html')); 
        });

         
    }

    listen() {
        
        this.app.listen( this.port, () =>{
            
            console.log(`Servidor corriendo correctamente por el puerto ${ this.port }`);
        });

    }

}





module.exports = Server;