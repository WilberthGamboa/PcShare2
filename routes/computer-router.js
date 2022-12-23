const {Router} = require('express');
const {check} = require('express-validator');
const {  getComputers, deleteComputers, getImg, postComputer, putComputer, getComputer } = require('../controllers/computer-controller');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validationResult-middleware');

const router = Router();
router.get('/computadoras',[
    validarJWT
],getComputer);



router.get('/',[
    validarJWT
],getComputers);

router.get('/download/:id',[
    validarJWT
],getImg)

router.post('/',[
    validarJWT,
 
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('nombre','Nombre no puede ser mayor a 25').isLength({max:25}),
    check('procesador','El nombre es obligatorio').not().isEmpty(),
    check('procesador','Nombre no puede ser mayor a 25').isLength({max:200}),
    check('tarjetaDeVideo','El nombre es obligatorio').not().isEmpty(),
    check('tarjetaDeVideo','Nombre no puede ser mayor a 25').isLength({max:200}),
    check('tarjetaMadre','El nombre es obligatorio').not().isEmpty(),
    check('tarjetaMadre','Nombre no puede ser mayor a 25').isLength({max:200}),
    check('gabinete','El nombre es obligatorio').not().isEmpty(),
    check('gabinete','Nombre no puede ser mayor a 25').isLength({max:200}),
    check('almacenamiento','El nombre es obligatorio').not().isEmpty(),
    check('almacenamiento','Nombre no puede ser mayor a 25').isLength({max:200}),
    validarCampos
],

postComputer);

router.put('/:id',
[validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('nombre','Nombre no puede ser mayor a 25').isLength({max:25}),
    check('procesador','El nombre es obligatorio').not().isEmpty(),
    check('procesador','Nombre no puede ser mayor a 25').isLength({max:200}),
    check('tarjetaDeVideo','El nombre es obligatorio').not().isEmpty(),
    check('tarjetaDeVideo','Nombre no puede ser mayor a 25').isLength({max:200}),
    check('tarjetaMadre','El nombre es obligatorio').not().isEmpty(),
    check('tarjetaMadre','Nombre no puede ser mayor a 25').isLength({max:200}),
    check('gabinete','El nombre es obligatorio').not().isEmpty(),
    check('gabinete','Nombre no puede ser mayor a 25').isLength({max:200}),
    check('almacenamiento','El nombre es obligatorio').not().isEmpty(),
    check('almacenamiento','Nombre no puede ser mayor a 25').isLength({max:200}),
    validarCampos



],

putComputer
)

router.delete('/:id',[validarJWT],deleteComputers);
module.exports =router;