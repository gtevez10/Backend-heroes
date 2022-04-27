const { Router } = require('express');
const { check } = require('express-validator');

const { mutantesGet, mutantesPut, mutantesDelete, mutantesPost } = require('../controllers/mutantes.controller');

const { grupoValido, vehiculoValido, mutanteExiste, validarId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();
 
router.get('/', mutantesGet );

//PUT Actualizar :id es dinamico 
router.put('/:id', [
    check('id','No es un id valido').isMongoId(), // verificacion de id valido 
    check('id').custom( validarId ),

    check('grupo').custom( grupoValido ),
    check('vehiculo').custom( vehiculoValido ),
    check('nombre').custom( mutanteExiste ),
    check('condicion', 'La condicion de libertad del mutante es obligatoria y debe ser del tipo: Libertad, Detenido o Desconocido').isIn(['Libertad','Detenido','Desconocido' ]),
    check('superPoder', 'El Super poder del mutante es obligatorio').not().isEmpty(),
    check('lugarDeOperacion', 'El Lugar de operacion del mutante es obligatorio').not().isEmpty(),
    validarCampos
],mutantesPut);

//POST Crear nuevo Mutante

router.post('/', [

    //check('nombre', 'El nombre del mutante es obligatorio').not().isEmpty(),   //En la peticion, la propiedad 'nombre' del mutante es OBLIGATORIA
    check('nombre').custom( mutanteExiste ),
    //check('grupo', 'El grupo del Mutante es OBLIGATORIO y debe ser Heroe o Villano').isIn(['Heroe','Villano']),
    check('grupo').custom( grupoValido ),
    check('condicion', 'La condicion de libertad del mutante es obligatoria y debe ser del tipo: Libertad, Detenido o Desconocido').isIn(['Libertad','Detenido','Desconocido' ]),
    check('lugarDeOperacion', 'El Lugar de operacion del mutante es obligatorio').not().isEmpty(),
    check('superPoder', 'El Super poder del mutante es obligatorio').not().isEmpty(),
    //check('vehiculo', 'Se necesita conocer si el mutante necesita o no vehiculo').isIn(['Terreste','Aereo','No necesita']),
    check('vehiculo').custom( vehiculoValido ),
    validarCampos
] , mutantesPost );

//DELETE Eliminar Mutante
router.delete('/', mutantesDelete);




module.exports = router;