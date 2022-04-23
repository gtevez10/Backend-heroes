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


const mutanteExiste = async ( nombreMutante = '' ) =>{

    const existeMutante = await Mutante.findOne({ nombreMutante });

    if( existeMutante ){
        throw new Error(`El mutante con el nombre '${ nombreMutante }' ya se encuentra registrado en la Base de datos, porfavor ingrese un nuevo mutante`);
    
      
    }

}





module.exports = {
    grupoValido,
    vehiculoValido,
    mutanteExiste,
}