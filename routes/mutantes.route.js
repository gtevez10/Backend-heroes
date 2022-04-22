const { Router } = require('express');
const { mutantesGet, mutantesPut, mutantesDelete, mutantesPost } = require('../controllers/mutantes.controller');

const router = Router();

router.get('/', mutantesGet );

//PUT Actualizar :id es dinamico 
router.put('/:id', mutantesPut);

//POST Crear nuevo 

router.post('/', mutantesPost );

router.delete('/', mutantesDelete);




module.exports = router;