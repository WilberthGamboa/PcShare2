const path = require('path');
const fs = require('fs');
const { subirArchivo } = require("../helpers/subir-archivo");
const Computadorasdeusuarios = require("../models/computadorasdeusuarios-model");
const Computer = require("../models/computer-model");
const { recuperarComputer } = require('../helpers/recuperar-computer');

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


const getImg = async(req,res) =>{
  const { id } = req.params;
  const buscarComputadoraNombre = await recuperarComputer(req,res);
  
  if (!buscarComputadoraNombre) {
    return res.status(404).json({
      msg: "No existe pc con el id " + id,
    });
  }

  const pathFoto = path.join(__dirname,'../uploads/',buscarComputadoraNombre.urlFoto)
  res.download(pathFoto);

}

const postComputer = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).json("No se ha subido ningún archivo");
    return;
  }
  if (!req.files.archivo) {
    res.status(400).json("No se ha subido ningún archivo");
    return;
  }

  if (req.files.archivo.length>1) {
    res.status(400).json({
      msg: "No puedes subir más de dos archivos"
    });
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

const putComputer = async (req,res) =>{
  const buscarComputadoraNombre = await recuperarComputer(req,res);
  const { id } = req.params;
  //console.log()
  if (!buscarComputadoraNombre) {
    return res.status(404).json({
      msg: "No existe pc con el id" + id,
    });
  }

  if (!req.files || Object.keys(req.files).length === 0) {
    await buscarComputadoraNombre.update(req.body);
    
  

 
  
    
  }else{
    if (!req.files.archivo.length===0) {
      /*
      res.status(400).json("No files were uploaded.");
      return;
      */
      await buscarComputadoraNombre.update(req.body);
    }else{
   
      if (buscarComputadoraNombre.urlFoto) {
        const pathImagen = path.join(__dirname,'../uploads/',buscarComputadoraNombre.urlFoto);
        console.log(pathImagen)
         if (fs.existsSync(pathImagen)) {
          console.log(pathImagen)
            fs.unlinkSync(pathImagen);
          
         }
        
      }
  
      const urlFoto = await subirArchivo(req.files);
      const editComputerConFoto = [
        ...req.body,
        urlFoto
      ];
      await buscarComputadoraNombre.update(editComputerConFoto);
    }
    
  }

  res.json({
    msg:"Editado correctamente"
  })
  


}

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





module.exports = {
  getComputers,
  postComputer,
  putComputer,
  deleteComputers,
  getImg,
  postComputer
};
