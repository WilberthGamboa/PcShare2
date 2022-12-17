const express = require('express');
const fileUpload = require('express-fileupload');
//mis archivos
const db = require('../database/config');


//const { PORT } = require('../config');


class Server{
    constructor(){
        this.app = express();
        this.port=3000;
        this.paths ={
            auth:'/PcShare/auth',
            computer:'/PcShare/computer'
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
    this.app.use(fileUpload({
        useTempFiles : true,
        tempFileDir : '/tmp/',
        createParentPath:true
    }));
    }


    listen(){
        this.app.listen(this.port,()=>{
            console.log("Servidor abierto en",this.port);
        });
    }
    routes(){
       // this.app.use(this.usuariosPath,require('../routes/user'));
    this.app.use(this.paths.auth,require('../routes/auth-router'));
    this.app.use(this.paths.computer,require('../routes/computer-router'));

    }

    
}

module.exports = Server;