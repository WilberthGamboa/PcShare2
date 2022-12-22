const path = require('path');
const fs = require('fs');
const { subirArchivo } = require("../helpers/subir-archivo");
const Computadorasdeusuarios = require("../models/computadorasdeusuarios-model");
const Computer = require("../models/computer-model");
const { recuperarComputer } = require('../helpers/recuperar-computer');

const uploadComputer = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).json("No files were uploaded.");
    return;
  }
  if (!req.files.archivo) {
    res.status(400).json("No files were uploaded.");
    return;
  }

  try {
    const urlFoto = await subirArchivo(req.files);

    const {
      nombre,
      procesador,
      tarjetaDeVideo,
      tarjetaMadre,
      gabinete,
      almacenamiento,
    } = req.body;
    const buscarComputadoraNombre = await Computer.findOne({
      where: { nombre: nombre },
    });

    if (buscarComputadoraNombre) {
      res.status(400).json({
        msg: "Ya tienes una computadora registrada con ese nombre",
      });
      return;
    }
    const computer = new Computer({
      nombre,
      procesador,
      tarjetaDeVideo,
      tarjetaMadre,
      gabinete,
      almacenamiento,
      urlFoto,
    });

    const computerSaved = await computer.save();

    const idUsuario = req.id;
    const idComputadora = computerSaved.id;

    const computadorasdeusuarios = new Computadorasdeusuarios({
      idComputadora,
      idUsuario,
    });
    await computadorasdeusuarios.save();

    res.json({
      msg: "Computadora guardad con exito",
    });
  } catch (msg) {
    res.status(400).json({ msg });
  }
};

const getComputers = async (req, res) => {
  const idUsuario = req.id;

  const buscarComputadoraNombre = await Computer.findAll({
    include: [
      {
        model: Computadorasdeusuarios,
        where: {
          idUsuario: idUsuario,
        },
        attributes: [],
      },
    ],
  });

  //const datosComputadoras = await Computer.findAll({where})
  res.json({
    msg: buscarComputadoraNombre
  });
};

const deleteComputers = async (req, res) => {
 
  const { id } = req.params;
  const buscarComputadoraNombre = await recuperarComputer(req,res);


  if (!buscarComputadoraNombre) {
    return res.status(404).json({
      msg: "No existe pc con el id" + id,
    });
  }
  if (buscarComputadoraNombre.urlFoto) {
    const pathImagen = path.join(__dirname,'../uploads/',buscarComputadoraNombre.urlFoto);
    console.log(pathImagen)
     if (fs.existsSync(pathImagen)) {
      console.log(pathImagen)
        fs.unlinkSync(pathImagen);
      
     }
    
  }
  
  await buscarComputadoraNombre.destroy();
  res.json(buscarComputadoraNombre);
};

const getImg = async(req,res) =>{
  const { id } = req.params;
  const buscarComputadoraNombre = await recuperarComputer(req,res);
  
  if (!buscarComputadoraNombre) {
    return res.status(404).json({
      msg: "No existe pc con el id " + id,
    });
  }

  const pathFoto = path.join(__dirname,'../uploads/',urlFoto)
  res.download(pathFoto);

}

const postComputer = (req,res) =>{

}

module.exports = {
  uploadComputer,
  getComputers,
  deleteComputers,
  getImg,
  postComputer
};
