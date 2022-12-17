const {Sequelize, DataTypes} = require('sequelize');
const db = require('../database/config');

const Computadorasdeusuarios = db.define('computadorasdeusuarios',{
    
    
    idComputadora:{
        type:DataTypes.INTEGER,
        primaryKey: true
    },
    idUsuario:{
        type:DataTypes.INTEGER,
        primaryKey: true
    }
    
},{
    
    
    id: false,
});



module.exports=Computadorasdeusuarios;