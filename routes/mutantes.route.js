const { Router } = require('express');
const { check } = require('express-validator');
const { mutantesGet, mutantesPut, mutantesDelete, mutantesPost } = require('../controllers/mutantes.controller');

const router = Router();
 
router.get('/', mutantesGet );

//PUT Actualizar :id es dinamico 
router.put('/:id', mutantesPut);

//POST Crear nuevo Mutante

router.post('/', [

    check('nombre', 'El nombre del mutante es obligatorio').not().isEmpty(),   //En la peticion, la propiedad 'nombre' del mutante es OBLIGATORIA
    
    check('grupo', 'El grupo del Mutante es OBLIGATORIO y debe ser Heroe o Villano').isIn(['Heroe','Villano']),

    check('condicion', 'La condicion de libertad del mutante es obligatoria').isIn(['Libertad','Detenido','Desconocido' ]),
    check('lugarDeOperacion', 'El Lugar de operacion del mutante es obligatorio').not().isEmpty(),
    check('superPoder', 'El Super poder del mutante es obligatorio').not().isEmpty(),
    check('vehiculo', 'Se necesita conocer si el mutante necesita o no vehiculo').isIn(['Terreste','Aereo','No necesita']),

    
       
] , mutantesPost );

//DELETE Eliminar Mutante
router.delete('/', mutantesDelete);




module.exports = router;