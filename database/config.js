const {Sequelize} = require('sequelize');
//const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = require('../config');

const db = new Sequelize('pcshare','root','',{
   // host:'DB_HOST',
    dialect:'mysql',

});

module.exports= db;