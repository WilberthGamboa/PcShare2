const {Router} = require('express');
const check = require('express-validator');
const { userpost } = require('../controllers/user-controller');




const router = Router();


router.post('/',userpost);
