const mongooose = require('mongoose');

const dbConnection = async() => {

    try {

        await mongooose.connect( process.env.CONNECTIONDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });

        console.log('Base de datos online')
        
    } catch (error) {
        console.error(error);
        throw new Error('Error al iniciar la Base de Datos');
    }


}


module.exports = {
    dbConnection,
}