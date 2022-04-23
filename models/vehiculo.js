const { Schema, model } = require('mongoose');


const VehiculoSchema = Schema({
    vehiculo: {
        type: String,
        required: [true, 'Si el mutante tiene vehiculo, es obligatorio saberlo']
    }
});


module.exports = model('Vehiculo', VehiculoSchema );

