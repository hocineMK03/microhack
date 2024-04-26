
const services=require('../services/userServices')
const jwtCreate=require('../middleware/createjwt')
const userplanservices=require('../services/userplanService')
const projectservices=require('../services/projectServices')
class UserControllers{



    async handleLogin(req,res,next){
        const {phoneNumber,password}=req.body
        if(phoneNumber!=undefined && password!=undefined){
            try{
                const result=await services.handleLogin(phoneNumber,password)
                
            
                if(result){
                    const token=phoneNumber
                    const accessToken= jwtCreate.createAccessToken(token);
                const refreshToken= jwtCreate.createRefreshToken(token);
                
                res.cookie('access_token', accessToken, { httpOnly: true ,maxAge:4*60*1000 });
                res.cookie('refresh_token', refreshToken, { httpOnly: true, maxAge:24*60*60*1000});
                   return res.status(200).json({
                        status:'success',
                        message:'User logged in successfully',
                        data:result
                    })
                
                }
                const err=new Error('Invalid email or password')
                err.status=400
                err.status='fail'
                next(err)
            }
            catch(error){
                next(error)
            }   
        }
        else{
           const err=new Error('phoneNumber and password are required')
           err.status=400
           err.status='fail'
            next(err)
        }
    }

    async handleRegister(req,res,next){
        const {username,email,phoneNumber,password,planName}=req.body
        if(username!=undefined && email!=undefined && phoneNumber!=undefined && password!=undefined){
            try{
                const result=await services.handleRegister(username,email,phoneNumber,password)

            if(result){
                const token=phoneNumber
                const accessToken= jwtCreate.createAccessToken(token);
            const refreshToken= jwtCreate.createRefreshToken(token);
            
            res.cookie('access_token', accessToken, { httpOnly: true ,maxAge:10*60*60*1000 });
            res.cookie('refresh_token', refreshToken, { httpOnly: true, maxAge:24*60*60*1000});
            //! create user plan here

            const user=await services.handlegetuserid(phoneNumber)
            await userplanservices.handleCreateUserPlan(user,planName)
               return res.status(200).json({
                    status:'success',
                    message:'User registered successfully',
                    data:result
                })
            
            }
            const err=new Error('An error occured')
            err.status=400
            err.status='fail'
            next(err)
            }
            catch(error){
                next(error)
            }
        }
        else{
              const err=new Error('All fields are required')
              err.status=400
                err.status='fail'
                next(err)
        }



    }

    async handleCreateUser(req,res,next){
        const{projectName,username,email,phoneNumber,password,role,tag}=req.body

        if(username!=undefined && email!=undefined  && phoneNumber != undefined && password!=undefined){
            try{
                const result=await services.handleCreateUser(username,email,phoneNumber,password,role,req.user.user)
                console.log(result)
                if(result){
                    // ! add user to project
                    const user_id=await services.handlegetuserid(req.user.user)
                    const addUser=await projectservices.handleAddUsers(projectName,user_id,result._id,tag)
                    const userplan1=await userplanservices.handleIncrementProjectNumbers(user_id)
                    const incrementUserPlan=await userplanservices.handleIncrementUserNumbers(user_id,userplan1)

                    return res.status(200).json('success')
                }
                else{
                   
                    const err=new Error('couldnt')
                    err.status=400
                      err.status='fail'
                      next(err)
                }
               
            }
            catch(error){
                next(error)
            }
        }
        else{
            const err=new Error('some fields are missing')
              err.status=400
                err.status='fail'
                next(err)
        }

    }


    async handleDeleteUser(req,res,next){
        const {email}=req.body
        console.log(req.user,req.user.user)
        if(email!=undefined){
           
            try{
                const result=await services.handleDeleteUser(req.user.user,email)
                // ! delete from projects and decline from userplans
                if(result){
                    return res.status(200).json('success')
                }
                console.log(result)
                const err=new Error('couldnt')
              err.status=400
                err.status='fail'
                next(err)
            }
            catch(error){
                console.error(error)
                next(error)
            }
        }
        else{
            const err=new Error('some fields are missing')
              err.status=400
                err.status='fail'
                next(err)
        }

    }

    async handleDisplayUsers(req,res,next){
        const {username,role}=req.body
        try{
            const result=await services.displayUsers(username,role,req.user.user)
            if(result){
                return res.status(200).json(result)
            }
            return res.status(400).json('No users found')
        }
        catch(error){
            next(error)
        }
    }
}

module.exports=new UserControllers