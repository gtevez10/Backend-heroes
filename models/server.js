const express = require('express');
const cors = require('cors');



class Server { 

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.mutantesPath = '/api/mutantes';

        //Middleware
        this.middlewares();
        
        this.routes();
    }

    routes() {

        this.app.use( this.mutantesPath , require('../routes/mutantes.route'));
        
    }

    middlewares(){

        //CORS
        this.app.use( cors() )

        //Directorio Publico
        this.app.use( express.static( 'public' ) );
    }

    listen() {
        
        this.app.listen( this.port, () =>{
            
            console.log(`Servidor corriendo correctamente por el puerto ${ this.port }`);
        });

    }

}





module.exports = Server;