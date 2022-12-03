const {Router} = require('express');
const check = require('express-validator');
const { uploadComputer } = require('../controllers/computer-controller');

const router = Router();


router.post('/',uploadComputer);

module.exports =router;