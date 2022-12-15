const {Router} = require('express');
const {check} = require('express-validator');
const { authRegister, authLogin } = require('../controllers/auth-controller');
//const { confirmPassword } = require('../helpers/validator-password');
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
 check('password',"El campo no puede estar vacio").not().isEmpty(),
 check('passwordConfirm',"El campo no puede estar vacio").bail().not().isEmpty().custom((value,  {req} ) => {
    if (value !== req.body.password && value!==undefined&&req.body.password!==undefined) {
        throw new Error('Password confirmation does not match password')
        }else{
            return true;
        }
      }),
check('email',"El correo no es valido").isEmail(),
check('age',"La edad ingresada no es un número").isNumeric(),
check('age','No puedes más de 3 dígitos').isLength({max:3}),
 validarCampos
]
,authRegister);

router.post('/login',[

    check('email',"El correo no es valido").not().isEmpty(),
    check('password',"La contraseña es obligatorio").not().isEmpty(),
    validarCampos

],authLogin)


module.exports =router;