const { response, request } = require('express');
const confirmPassword  = (value,req) =>{

   if (value===undefined) {
   
    
   }else{
    if (value !== req.body.passwordConfirm) {
        // trow error if passwords do not match
        throw new Error("Las contraseñas no coinciden");
    } else {
        return value;
    }
   }
   

   
   
   
}


module.exports={
    confirmPassword
}