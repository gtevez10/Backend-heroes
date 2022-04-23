const { Schema, model } = require('mongoose');

const GrupoSchema = Schema({
    grupo: {
        type: String,
        required: [true, 'El grupo del Mutante es obligatorio'],
    }    

});

module.exports = model('Grupo', GrupoSchema );
