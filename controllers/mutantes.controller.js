const { response, request } = require('express'); // para obtener el tipado de res.


const mutantesGet = (req = request , res = response  ) => {
    
    
    res.json({
        
        
        msg: 'GET api - CONTROLADOR',
        
    });
};

const mutantesPut = (req, res = response ) => {

    const id = req.params.id;
    res.json({

        ok:'PUT api - CONTROLADOR ',
        id,
    });
};

const mutantesPost = (req, res = response ) => {

    const body = req.body;
    res.json({
        
        msg: 'POST api - CONTROLADOR ',
        body
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