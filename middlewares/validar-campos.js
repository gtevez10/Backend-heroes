const { validationResult } = require('express-validator');

const validarCampos = ( req, res, next ) =>{

 //Validacion de middlewares
 const errors = validationResult(req);
 if( !errors.isEmpty() ){
     return res.status(400).json(errors)
 }

 next() // si todo sale bien ejecuta el siguiente middleware 

};


module.exports = {
    validarCampos,
};