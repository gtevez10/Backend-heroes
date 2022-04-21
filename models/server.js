const express = require('express');



class Server { 

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Middleware
        this.middlewares();
        
        this.routes();
    }

    routes() {

        this.app.get('/prueba', (req, res ) => {
            res.json({
                
                msg: 'GET api ',
                
            });
        });
        //PUT Actualizar
        this.app.put('/prueba', (req, res ) => {
            res.json({

                ok:'PUT api ',
            });
        });

        //POST Crear nuevo 
        this.app.post('/prueba', (req, res ) => {
            res.json({
                
                msg: 'POST api ',

            });
        });

        this.app.delete('/prueba', (req, res ) => {
            res.json({
                
                msg: 'DELETE api ',
            });
        });
    }

    middlewares(){

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