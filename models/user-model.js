const {Sequelize, DataTypes} = require('sequelize');
const db = require('../database/config');

const User = db.define('users',{
    Name:{
        type:DataTypes.STRING
    },
    LastName:{
        type:DataTypes.STRING
    },

    Username:{
        type:DataTypes.STRING
    },

    Password:{
        type:DataTypes.STRING
    },

    Email:{
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.NUMBER
    }


});

module.exports=User;