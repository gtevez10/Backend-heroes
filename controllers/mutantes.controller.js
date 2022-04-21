const { response } = require('express'); // para obtener el tipado de res.


const mutantesGet = (req, res = response  ) => {
    
    res.json({
        
        msg: 'GET api - CONTROLADOR',
        
    });
};

const mutantesPut = (req, res = response ) => {
    res.json({

        ok:'PUT api - CONTROLADOR ',
    });
};

const mutantesPost = (req, res = response ) => {
    res.json({
        
        msg: 'POST api - CONTROLADOR ',

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