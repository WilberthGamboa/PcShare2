const {Sequelize, DataTypes} = require('sequelize');
const db = require('../database/config');
const Computadorasdeusuarios = require('./computadorasdeusuarios-model');

const Computer = db.define('computers',{
    nombre:{
        type:DataTypes.STRING
    },
    procesador:{
        type:DataTypes.STRING
    },

    tarjetaDeVideo:{
        type:DataTypes.STRING
    },

    tarjetaMadre:{
        type:DataTypes.STRING
    },

    gabinete:{
        type:DataTypes.STRING
    },
    almacenamiento:{
        type:DataTypes.NUMBER
    },
    urlFoto:{
        type:DataTypes.STRING
    }
},{
    
    modelName: "computers",
    timestamps: false,



});

module.exports=Computer;