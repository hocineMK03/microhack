
const userplans=require('../services/userplanService')
const services=require('../services/projectServices') 
const userservicess=require('../services/userServices')
class ProjectController {
  

    async handleCreateProject(req,res,next){
        const {projectName,projectDescription,projectpriority,projectStatus}=req.body
        // ! tasknumbes to get from payed plan
        if(projectName!=undefined && projectDescription!=undefined){
            try{
                const user_id=await userservicess.handlegetuserid(req.user.user)
                const result=await services.handleCreateProject(projectName,projectDescription,user_id,projectpriority,projectStatus)
                
                const userplan1=await userplans.handleIncrementProjectNumbers(user_id)
                if(result){
                    return res.status(200).json('success')
                }
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

    async handleDeleteProject(req,res,next){
        const {projectName}=req.body
        if(projectName!=undefined){
            try{
                const user_id=await userservicess.handlegetuserid(req.user.user)
                const result=await services.handleDeleteProject(projectName,user_id)
                if(result){
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
    async handleUpdateProject(req,res,next){


    }
    async handleDisplayProjects(req,res,next){

        
        try{
            const result=await services.displayProjects()
            return res.status(200).json(result)
        }
        catch(error){
            next(error)
        }

        

    }


}
module.exports = new ProjectController;


// ! when regitered offer free plan automatically