const express = require('express');


//const { PORT } = require('../config');


class Server{
    constructor(){
        this.app = express();
        this.port=3000;
        this.usuariosPath = '/api/usuarios';
        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB(){
     
    }

    middlewares(){
    this.app.use(express.json());

      
    }


    listen(){
        this.app.listen(this.port,()=>{
            console.log("Servidor abierto en",this.port);
        });
    }
    routes(){
        this.app.use(this.usuariosPath,require('../routes/user'));
    

    }
}

module.exports = Server;