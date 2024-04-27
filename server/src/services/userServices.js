
const users=require('../models/users')
const authutils=require('../utils/authutil')
const mongoose = require('mongoose');
class AuthServices{


    async handleLogin(phoneNumber,password){
        
        try{
            const userExists=await users.findOne({phoneNumber:phoneNumber})
            if(userExists){
                const passwordMatch=await authutils.compareHashedPasswords(password,userExists.password)
                if(passwordMatch){
                    return true
                }
                return false
            }
        }
        catch(error){
            throw new Error('An error occured')
        }
    }
    async handleRegister(username,email,phoneNumber,password){
        
        if(!authutils.validatemail(email)){
            
            const validationError = new Error('Invalid email');
        validationError.statusCode = 400;
        throw validationError;
        }
        try{
                const duplicateUser = await users.findOne({email: email}).exec();
                if (duplicateUser) {
                    const validationError = new Error('email already taken');
        validationError.statusCode = 400;
        throw validationError;
                }
            }
            catch(error){
                const validationError = new Error(error);
        validationError.statusCode = 400;
        throw validationError;
              
            }
        try{
            
            
            const hashedPassword=await authutils.hashpasswords(password)
            const newUser=await users.create({
                username:username,
                email:email,
                phoneNumber:phoneNumber,
                password:hashedPassword,
                role:'project manager',
                createdBy:null

            })
            
            console.log(newUser)
            return newUser
        }
        catch(error){
          
            throw new Error(error)
        }
    }
    async handleDeleteUser(prjm,phoneNumber){
        
        //check if he are his worker
        console.log(await this.checkUser(prjm))
        if((await this.checkUser(prjm)==='project manager')&&(await this.checkUser(phoneNumber)==='task manager' || await this.checkUser(phoneNumber)==='worker')){
            try {
                const userToDelete = await users.findOneAndDelete({
                    phoneNumber: phoneNumber // Assuming 'user' contains the email of the user to delete
                });
            
                if (userToDelete) {
                    console.log('User successfully deleted:', userToDelete);
                    
                } else {
                    console.log('No user found with the specified email:', phoneNumber);
                    
                }
            
                return userToDelete; // Return the deleted user document or null
            } catch (error) {
                console.error('Error occurred while deleting user:', error);
                
                throw error; 
            }
        }
        else{
            console.log("here")
        }

    }
    async handleCreateUser(username, email, phoneNumber, password,role,creator,longitude,laltitude){
        let long=longitude || 0
        let lalt=laltitude || 0
        const creator_info=await this.checkUser(creator)
        console.log(creator_info)
        if(creator_info && creator_info.role==='project manager'){
            const st=['worker','task manager', 'project manager']
            let role1=null
            if(!st.includes(role)){
                role1=null
            }
            role1=role
            try {
                const creator_id=creator_info._id
                const newUser=await users.create({
                    username:username,
                    email:email,
                    phoneNumber:phoneNumber,
                    password:password,
                    createdBy:creator_id,
                    role:role1,
                    taskLatitude:lalt,
                    taskLongitude:long
                })
                
                if(newUser){
                    return newUser
                }
               
            
            } catch (error) {
                console.error(error)
                throw new Error('failed to create user')

            }
        }
        else{
            console.log("herhhhe")
        }
    }
    

    async  displayUsers(username, role, creator) {
        try {
            let query = {};
            
            if (creator!=undefined && mongoose.Types.ObjectId.isValid(creator)) {
                query.createdBy = creator;
            }
    
            if (username) {
                query.username = { $regex: `^${username}`, $options: 'i' };
            }
    
            const validRoles = ['worker', 'task manager', 'project manager'];
    
            if (role && validRoles.includes(role)) {
                query.role = role;
            }
    
            const result = await users.find(query);
    
            return result;
        } catch (error) {
            console.error(error);
            throw new Error("Couldn't find users");
        }
    }
    

    async updateUserRole(email,role){
        if(!authutils.validatemail(email)){
            throw new Object.assign(new Error('Invalid email'),{statusCode:400})
        }
        try{
            
            const userExists=await users.findOne({email:email})
            if(userExists){
                const st=['worker','task manager', 'project manager']
            let role1=null
            if(!st.includes(role)){
                role1=null
            }
            role1=role
                const updatedUser=await users.findOneAndUpdate({email:email},{role:role1})
                if(updatedUser){
                    return updatedUser
                }
            }
        }
        catch(error){
            throw new Error('An error occured')
        }
    }
    async checkUser(phoneNumber){
        
        try{
            const result=await users.findOne({phoneNumber:phoneNumber})
            if(result){
                return result
            }
            return null

        }
        catch(error){
            console.error(error)
            throw new Error('error happenned')
        }
    }
    async handlegetuserid(phoneNumber) {
        try {
            const result = await users.findOne({ phoneNumber: phoneNumber });
            if (result) {
                console.log(result);
                return result._id; // Access the _id property of the user document
            }
            return null;
        } catch (error) {
            throw new Error('An error occurred');
        }
    }
    
    async handleGetWorkers(projectName,user){
        try{
            const projectManagerInfo=await this.checkUser(user)
            if(projectManagerInfo && (projectManagerInfo.role==='project manager' || projectManagerInfo.role==='task manager')){
                const projectManager_id=projectManagerInfo._id
                const result=await users.find({createdBy:projectManager_id})
                if(result){
                    return result
                }
            }
        }
        catch(error){
            throw new Error('An error occured')
        }
    }
}

module.exports=new AuthServices