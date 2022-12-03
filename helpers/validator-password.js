
const confirmPassword  = (value,req) =>{
const {password} = req
    if (value !== password && value!==undefined&&password!==undefined) {
        throw new Error('Password confirmation does not match password')
        }else{
            return true;
        }
      
    


  
   

   
   
   
}


module.exports={
    confirmPassword
}