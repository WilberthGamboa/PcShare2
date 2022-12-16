const { subirArchivo } = require("../helpers/subir-archivo");
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
    const computer = new Computer({nombre,procesador,tarjetaDeVideo,tarjetaMadre,gabinete,almacenamiento,urlFoto});
    console.log("este es el x" + computer)
    const x = await computer.save();
    console.log("este es el x" + x)
  res.json({
    path : urlFoto
  })
  } catch (msg) {
    res.status(400).json({msg})
    
  }
  
 
}


module.exports={
    uploadComputer
}