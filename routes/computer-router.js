const {Router} = require('express');
const {check} = require('express-validator');
const { uploadComputer, getComputers } = require('../controllers/computer-controller');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validationResult-middleware');

const router = Router();


router.post('/',[
    validarJWT,
 
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('procesador','El nombre es obligatorio').not().isEmpty(),
    check('tarjetaDeVideo','El nombre es obligatorio').not().isEmpty(),
    check('tarjetaMadre','El nombre es obligatorio').not().isEmpty(),
    check('gabinete','El nombre es obligatorio').not().isEmpty(),
    check('almacenamiento','El nombre es obligatorio').not().isEmpty(),
    validarCampos
],

uploadComputer);

router.get('/',[
    validarJWT
],getComputers);

module.exports =router;