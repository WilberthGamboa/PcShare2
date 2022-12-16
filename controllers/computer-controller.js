const { subirArchivo } = require("../helpers/subir-archivo");



const uploadComputer= async(req,res) =>{
   console.log(req)

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).json('No files were uploaded.');
    return;
  }
  if (!req.files.archivo ) {
    res.status(400).json('No files were uploaded.');
    return;
  }
  const pathCompleto = await subirArchivo(req.files);

  res.json({
    path : pathCompleto
  })
 
}


module.exports={
    uploadComputer
}