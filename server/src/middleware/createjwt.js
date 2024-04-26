const jwt=require('jsonwebtoken')
require('dotenv').config();

class CreateJWT{


    createRefreshToken=(user)=>{
       
        const token=jwt.sign({user},process.env.REFRESH_JWT_SECRET,{expiresIn:'5d'});
        return token;

    }
    createAccessToken=(user)=>{
       
        console.log("here",user)
        const token=jwt.sign({user},process.env.ACCESS_JWT_SECRET,{expiresIn:'5h'});
        return token;
    }
}

module.exports=new CreateJWT