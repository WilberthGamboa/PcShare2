const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');
const User = require('../models/user-model');

const authLogin= async (req,res) =>{
    const {email,password} = req.body;
    const usuario = await User.findOne({ where: { email: email } });
   

    if (usuario.length==0) {
        return res.status(400).json({
            msg: "Usuario no encontrado"
        })
    }
  
    console.log(usuario)

    const validPassword = bcryptjs.compareSync( password, usuario.password );
        if ( !validPassword ) {
            return res.status(400).json({
                msg: '- password/ Usuario / Password no son correctos '
            });
        }
    //generar jwt
    const token = await generarJWT(usuario.id);
    res.json({
        msg:"Te has logueado",
        token
    })

}

const authRegister = async (req,res) =>{
    const {name,lastname,username,password,email,age}  = req.body;

    const user = new User({name,lastname,username,password,email,age});
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password,salt);
    await user.save();
    res.json({
        user
    })


}




module.exports ={
    authRegister,
    authLogin
}