

const plans=require('../models/plans')
class PlanService{

    
    async handleCreatePlan(planName,planDescription,planPrice,planFeatures,planUserNumbers,planTasksNumbers,planProjectsNumbers){

        try{

            const plan=await plans.create({planName,planDescription,planPrice,planFeatures,planUserNumbers,planTasksNumbers,planProjectsNumbers})
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
        


}
module.exports=new PlanService