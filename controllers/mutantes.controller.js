const { response, request } = require('express'); // para obtener el tipado de res.
const Mutante = require('../models/mutante'); // Mutante con Mayuscula ya que me va permitir crear instancias de esta, es un estandar no obligacion

const mutantesGet = async(req = request , res = response  ) => {
    const { limit = 100, from = 0}  = req.query;
    const  estadoActivo = { estado: true };
 

    // (codigo Promise.all )
    /*const mutantesInfo = await Mutante.find( estadoActivo ) // Busca los mutantes que tenga su estado: true ya que esto significa que no han sido eliminados ( Se manejara un DELETE de tipo que no se borrara el Mutante directamente de la base de datos, sino que se maneja por estados)  
        .limit( Number( limit ) )  // limit sirve para hacer paginacion, debo convertir las query que capture (limite) en Number ya que limit solo recibe tipo de dato numerico y de las query que capture viene como String
        .skip( Number( from ) )
    
    const totalRegistros = await Mutante.countDocuments( estadoActivo ); // countDocuments() Me cuenta todos los registros de mi Base de datos
    */


    [ registrosTotales, mutantesActivos ]  = await Promise.all([ // Promise.all Me permite ejecutar todas las promesas al mismo tiempo y no unas tras otra como en el codigo comentado anteriormente (codigo Promise.all ). Esto optimiza mucho el tiempo de respuesta de la API

        Mutante.countDocuments( estadoActivo ), 
        Mutante.find( estadoActivo ) 
        .limit( Number( limit ) )  
        .skip( Number( from ) )



    ]);

    res.json({ registrosTotales ,mutantesActivos  });
};

const mutantesPut = async(req, res = response ) => {

    const id = req.params.id;
    const { __v, _id, ...mutante } = req.body; // De las peticion en el body extraigo las propiedades del mutante que necesito (todas menos __v, _id )

    //Actualizacion de Mutante 

    const mutanteUpdate = await Mutante.findByIdAndUpdate( id, mutante, {new: true} ); 

    res.json({ mutanteUpdate });
};

const mutantesPost = async( req, res = response ) => {

    const {nombre, grupo, condicion, lugarDeOperacion, superPoder, vehiculo} = req.body;
    const mutante = new Mutante( {nombre, grupo, condicion, lugarDeOperacion, superPoder, vehiculo}); //Creacion de la instancia, no guarda en la BD aun...
    
    

    await mutante.save(); //Aqui si graba en la BD 

    res.json({

        mutante
    });
};

const mutantesDelete = async(req, res = response ) => {

    const { id } = req.params;
    const estadoEliminado = { estado: false };

    //const mutanteDelete = await Mutante.findByIdAndDelete( id ); //Eliminar fisicamente de mi BD (No se recomienda)

    const mutanteDelete = await Mutante.findByIdAndUpdate( id, estadoEliminado,{new: true} );
 

    res.json({ mutanteDelete });
};




module.exports = {
    mutantesGet,
    mutantesPut,
    mutantesPost,
    mutantesDelete,
}