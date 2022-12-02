const { validationResult } = require("express-validator");
//Se encarga de acumular los campos que devuelven errores
const validarCampos = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
}   


module.exports= {
    validarCampos
}