const { where } = require("sequelize");
const { subirArchivo } = require("../helpers/subir-archivo");
const Computadorasdeusuarios = require("../models/computadorasdeusuarios-model");
const Computer = require("../models/computer-model");


const uploadComputer= async(req,res) =>{
   

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).json('No files were uploaded.');
    return;
  }
  if (!req.files.archivo ) {
    res.status(400).json('No files were uploaded.');
    return;
  }

  try {
    const urlFoto = await subirArchivo(req.files);
   
    const {nombre,procesador,tarjetaDeVideo,tarjetaMadre,gabinete,almacenamiento}  = req.body;
    const buscarComputadoraNombre = await Computer.findOne({ where: { nombre: nombre } });

    if (buscarComputadoraNombre) {
      res.status(400).json({
        msg :  "Ya tienes una computadora registrada con ese nombre"
      })
      return;
    }
    const computer = new Computer({nombre,procesador,tarjetaDeVideo,tarjetaMadre,gabinete,almacenamiento,urlFoto});

    const computerSaved = await computer.save();
  
    const idUsuario=req.id;
    const idComputadora=computerSaved.id;
  

    const computadorasdeusuarios = new Computadorasdeusuarios({idComputadora,idUsuario});
    await computadorasdeusuarios.save();

  res.json({
    msg:"Computadora guardad con exito"
  })
  } catch (msg) {
    res.status(400).json({msg})
    
  }
  
 
}

const getComputers = async(req,res) =>{
  const idUsuario=req.id;

  const buscarComputadoraNombre = await Computer.findAll({
    
   include: [{ 
    model: Computadorasdeusuarios,
  where:{
    idUsuario:idUsuario
  },
  attributes: [],
  }],
    });
  
 //const datosComputadoras = await Computer.findAll({where})
  res.json({
    msg: buscarComputadoraNombre
  })
}


module.exports={
    uploadComputer,
    getComputers
}