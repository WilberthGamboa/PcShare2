const {Router} = require('express');
const {check} = require('express-validator');
const { authRegister } = require('../controllers/auth-controller');
const { confirmPassword } = require('../helpers/validator-password');
const { validarCampos } = require('../middlewares/validationResult-middleware');


const router = Router();


router.post('/register',
[
 check('name',"El campo no puede estar vacio").not().isEmpty(),
 check('name',"El campo no puede tener mas de 50 caracteres").isLength({max:50}),
 check('lastname',"El campo no puede estar vacio").not().isEmpty(),
 check('lastname',"El campo no puede tener mas de 50 caracteres").isLength({max:50}),
 check('username',"El campo no puede estar vacio").not().isEmpty(),
 check('username',"El campo no puede tener mas de 25 caracteres").isLength({max:25}),
 check('password',"El campo no puede estar vacio").not().isEmpty().bail().custom((value,{req, loc, path}) => {
    confirmPassword(value,req)
}),
 check('passwordConfirm',"El campo no puede estar vacio").not().isEmpty(),

 validarCampos
 
 
],

authRegister);

module.exports =router;