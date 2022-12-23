const {Router} = require('express');
const {check} = require('express-validator');
const {  getComputers, deleteComputers, getImg, postComputer, putComputer } = require('../controllers/computer-controller');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validationResult-middleware');

const router = Router();

router.get('/',[
    validarJWT
],getComputers);

router.get('/download/:id',[
    validarJWT
],getImg)

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

postComputer);

router.put('/:id',
[validarJWT],

putComputer
)

router.delete('/:id',[validarJWT],deleteComputers);
module.exports =router;