
const plans=require('../models/plans')
const userplans=require('../models/userplans')
class UserPlanService {
    
    async handleCreateUserPlan(user_id,planName){
        const planid=await plans.findOne({planName:planName})
        try{
            const plan=await userplans.create({user:user_id,plan:planid._id})
            if(plan){
                
                return plan
            }
            else{
                const validationError = new Error('couldnt create plan');
                validationError.statusCode = 400;
                throw validationError;
            }
        }
        catch(err){
            const validationError = new Error(err || 'An error occured');
        validationError.statusCode = 400;
        throw validationError;
        }


    }
    async handleGetUserPlanByUser(user_id){
        try{

            const getplan=await userplans.findOne({
                user:user_id
            })
            if(getplan){
                return getplan
            }
            else{
                const validationError = new Error('No plan found');
                validationError.statusCode = 400;
                throw validationError;
            }

        }
        catch(err){
            const validationError = new Error(err || 'An error occured');
        validationError.statusCode = 400;
        throw validationError;
        }


        
    }
    async handleIncrementProjectNumbers(user_id){
        try{
            const thePlan=await this.handleGetUserPlanByUser(user_id)
            if(thePlan){
                thePlan.currentProjectNumbers+=1
                await thePlan.save()
                return thePlan
            }
            else{
                const validationError = new Error('No plan found');
                validationError.statusCode = 400;
                throw validationError;
            }
        }
        catch(err){
            const validationError = new Error(err || 'An error occured');
        validationError.statusCode = 400;
        throw validationError;
        }
    }
    async handleIncrementUserNumbers(user_id){
        try{
            const thePlan=await this.handleGetUserPlanByUser(user_id)
            if(thePlan){
                thePlan.currentUserNumbers+=1
                await thePlan.save()
                return thePlan
            }
            else{
                const validationError = new Error('No plan found');
                validationError.statusCode = 400;
                throw validationError;
            }
        }
        catch(err){
            const validationError = new Error(err || 'An error occured');
        validationError.statusCode = 400;
        throw validationError;
        }
    }
}

module.exports=new UserPlanService