const Computadorasdeusuarios = require("../models/computadorasdeusuarios-model");
const Computer = require("../models/computer-model");

const recuperarComputer = async(req,res) =>{
    const idUsuario = req.id;
    const { id } = req.params;
    const buscarComputadoraNombre = await Computer.findOne({
      
      include: [
        {
          model: Computadorasdeusuarios,
          where: {
            idUsuario: idUsuario,
          },
          attributes: [],
        },
      ],
      where:{
        id:id
      }
    });
    

    return buscarComputadoraNombre;
}

module.exports ={
    recuperarComputer
}