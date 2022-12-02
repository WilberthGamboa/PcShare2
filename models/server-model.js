const express = require('express');
//mis archivos
const db = require('../database/config');


//const { PORT } = require('../config');


class Server{
    constructor(){
        this.app = express();
        this.port=3000;
        this.paths ={
            auth:'/PcShare/auth',
            user:'/pcShare/user'
        }
       
        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB(){
        try {
            await db.authenticate;
            console.log("database arriba")
        } catch (error) {
            
            
        }
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
       // this.app.use(this.usuariosPath,require('../routes/user'));
    this.app.use(this.paths.auth,require('../routes/auth-router'))

    }
}

module.exports = Server;