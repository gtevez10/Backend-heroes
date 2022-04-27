const { default: mongoose } = require('mongoose');
const Grupo = require('../models/grupo');
const Mutante = require('../models/mutante');
const Vehiculo = require('../models/vehiculo');

const grupoValido = async ( grupo = '' ) => {
    const existeGrupo = await Grupo.findOne({ grupo });
    if( !existeGrupo){
        throw new Error(`el grupo '${ grupo }' no esta registrado en la Base de datos, porfavor ingrese un grupo valido`);

    }
};

const vehiculoValido = async ( vehiculo = '') => {

    const existeVehiculo =  await Vehiculo.findOne({ vehiculo });

    if( !existeVehiculo ){
        throw new Error(`El vehiculo '${ vehiculo }' del mutante no esta registrado en la Base de datos, porfavor ingrese un vehiculo valido`)
 
    }

}


const mutanteExiste = async ( nombre = '' ) =>{ // Recibo la propiedad exacta de mi modelo mutante 

    const existeMutante = await Mutante.findOne({ nombre }); //findOne() debo apuntar a la propiedad exacta que necesito de mi modelo mutante

    if( existeMutante ){
        throw new Error(`El mutante con el nombre '${ nombre }' ya se encuentra registrado en la Base de datos, porfavor ingrese un nuevo mutante`);
    
      
    }

}

const validarId = async ( id ) =>{ // Valida si el id del mutante que se quiere actualizar existe o no.


    const existeId = await Mutante.findById( id );
    if( !existeId ){
        throw new Error(` El mutante con el id: ${ id } no existe` );
    }
}





module.exports = {
    grupoValido,
    vehiculoValido,
    mutanteExiste,
    validarId,
}