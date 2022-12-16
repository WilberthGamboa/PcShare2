const {Router} = require('express');
const check = require('express-validator');
const { uploadComputer } = require('../controllers/computer-controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();


router.post('/',[
    validarJWT
],

uploadComputer);

module.exports =router;