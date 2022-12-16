const jwt = require('jsonwebtoken');

const generarJWT = ( id = '' ) => {

    return new Promise( (resolve, reject) => {

        const payload = { id };
        console.log(id)
        jwt.sign( payload, process.env.secretOrPrivateKey, {
            
        }, ( err, token ) => {

            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        })

    })
}



module.exports ={
    generarJWT
}