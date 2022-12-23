const Computadorasdeusuarios = require("./computadorasdeusuarios-model");
const Computer = require("./computer-model");
const User = require("./user-model");



Computer.belongsTo(Computadorasdeusuarios,{foreignKey: "id"})

//Computadorasdeusuarios.belongsTo(User,{foreignKey: "idUsuario"});
//Computadorasdeusuarios.belongsTo(Computer,{foreignKey: "idComputadora"});