
const confirmPassword  = (value,req) =>{
   
    if (value != req.body.passwordConfirm) {
        
        // trow error if passwords do not match
        throw new Error("Las contraseñas no coinciden");
    }
    


  
   

   
   
   
}


module.exports={
    confirmPassword
}