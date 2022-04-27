const { response, request } = require('express'); // para obtener el tipado de res.
const Mutante = require('../models/mutante'); // Mutante con Mayuscula ya que me va permitir crear instancias de esta, es un estandar no obligacion

const mutantesGet = (req = request , res = response  ) => {
    
    
    res.json({
        
        
        msg: 'GET api - CONTROLADOR',
        
    });
};

const mutantesPut = async(req, res = response ) => {

    const id = req.params.id;
    const { __v, _id, ...mutante } = req.body; // De las peticion en el body extraigo las propiedades del mutante que necesito (todas menos __v )

    //Actualizacion de Mutante 

    const mutanteUpdate = await Mutante.findByIdAndUpdate( id, mutante, {new: true} ); // 

    console.log(mutanteUpdate)

    res.json({

        ok:'PUT api - CONTROLADOR ',
        id,
        mutanteUpdate,
    });
};

const mutantesPost = async( req, res = response ) => {

   

    const {nombre, grupo, condicion, lugarDeOperacion, superPoder, vehiculo} = req.body;
    const mutante = new Mutante( {nombre, grupo, condicion, lugarDeOperacion, superPoder, vehiculo}); //Creacion de la instancia, no guarda en la BD aun...
    
    

    await mutante.save(); //Aqui si graba en la BD 

    res.json({

        mutante
    });
};

const mutantesDelete = (req, res = response ) => {
    res.json({
        
        msg: 'DELETE api - CONTROLADOR ',
    });
};




module.exports = {
    mutantesGet,
    mutantesPut,
    mutantesPost,
    mutantesDelete,
}