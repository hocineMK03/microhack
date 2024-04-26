
const bcrypt = require('bcrypt');

class AuthUtil{

    async  hashpasswords(password){
        try {
        const hashedPassword = await bcrypt.hash(password, 4);
        
        return hashedPassword;
        } catch (error) {
        
        throw new Object.assign(error, { statusCode: 400 });
        
        }
        }

        async compareHashedPasswords(password,storedHashedPassword){
            let testhash= await bcrypt.compare(password, storedHashedPassword);
            
            if(testhash){
             return true
            }
            return false
         }
         validatemail(email){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
            }


}
module.exports=new AuthUtil