
const services=require('../services/planService')

class PlanControllers{

    async handleCreatePlan(req,res,next){
        const{planName,planDescription,planPrice,planFeatures,planUserNumbers,planTasksNumbers,planProjectsNumbers}=req.body

        try{
            const result=await services.handleCreatePlan(planName,planDescription,planPrice,planFeatures,planUserNumbers,planTasksNumbers,planProjectsNumbers)
            if(result){
                return res.status(200).json({
                    status:'success',
                    message:'Plan created successfully',
                    data:result
                })

            }
            const err=new Error('couldnt create plan')
            err.status=400
            next(err)
        }
        catch(error){
            next(error)
        }
    }
}
module.exports=new PlanControllers