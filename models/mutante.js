const { model, Schema } = require('mongoose');

const MutanteSchema = Schema({
    nombre: {

        type:String,
        required: [true, 'El nombre del mutante es obligatorio']
    },
    grupo: {

        type: String,
        required: [true, 'El grupo del mutante es obligatorio'],
        enum: [ 'Heroe','Villano']
    },
    condicion: {

        type: String,
        required: [true, 'La condicion de libertad del mutante es obligatorio'],
        enum: [ 'Libertad','Detenido','Desconocido']

    },
    lugarDeOperacion: {

        type: String,
        required: [true, 'La ciudad o lugar de operacion del mutante es obligatoria']
    },
    superPoder: {

        type: String,
        required: [true, 'El super poder es obligatorio'],
        
    },

    vehiculo: {

        type: String,
        required: [true, 'Saber el vehiculo  es obligatorio'],
        enum: [ 'Terrestre','Aereo','No necesita']
    },
    img: {

        type: String,
        
    },
    estado: {
        type: Boolean,
        default: true,
    },

});

MutanteSchema.methods.toJSON = function(){ // Para remover el __v creado por la Base de datos y enviar la respuesta sin el __v
    const { __v, ...mutante } = this.toObject();
    return mutante;


};


module.exports = model('Mutante', MutanteSchema ); // para exportar el esquema lo hago con la funcion model()