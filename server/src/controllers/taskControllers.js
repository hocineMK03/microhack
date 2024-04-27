
const services=require('../services/taskServices')
const projectservices=require('../services/projectServices')
const userservices=require('../services/userServices')
const tasks = require('../models/tasks')
class TaskControllers{


    async handleCreateTask(req,res,next){
        const{taskName,taskDescription,taskNeededworkers,tasktags,taskpriority,taskStatus,projectName}=req.body
        try{
            const getparentobject=await projectservices.getProjectID(projectName)
            
            const result=await services.handleCreateTask(taskName,taskDescription,taskNeededworkers,req.user.user,tasktags,taskpriority,taskStatus,getparentobject)
            if(result){
                
                let user_id=await userservices.checkUser(req.user.user)
                const addtasks=await projectservices.handleAddTasks(projectName,user_id._id,result._id)
                console.log("addtaskks",addtasks)
                return res.status(200).json('success')
            }
            const err=new Error('couldnt')
          err.status=400
            err.status='fail'
            next(err)
        }
        catch(error){
            // console.error(error)
            next(error)
        }
    }
    async handleDisplayTasks(req,res,next){
        const {projectName,taskpriority,taskStatus}=req.body

        try{

            const result=await services.handleDisplayTasks(req.user.user,taskpriority,taskStatus,projectName)
            if(result){

                return res.status(200).json(result)
            }
            const err=new Error('couldnt')
            err.status=400
              err.status='fail'
              next(err)
        }
        catch(err){
            console.error(err)
            next(err)
        }

    }

    async handleDisplayTasksByID(req,res,next){
        const {task_id}=req.query
        if(!task_id){
            const err=new Error('no')
            err.status=400
              err.status='fail'
              next(err)
        }
        try{
            const result=await services.handleDisplayTasksByID(task_id)
            if(result){
                return res.status(200).json(result)
            }
            const err=new Error('yes')
            err.status=400
              err.status='fail'
              next(err)
        }
        catch(err){
            next(err)
        }



    }

    async handleDeleteTask(req,res,next){
        const{task_id}=req.body
        try{

            const result=await services.handleDeleteTask(task_id)
            if(result){
                const gettask=await services.handleGetID(task_id)
               
                if(deletetask){
                    // const project_id=gettask.taskParentProject
                    // const deletefromproject=await projectservices.deleteATaskFromAProject(task_id,project_id)
                     return res.status(200)
                }
                

            }

            const err=new Error('yes')
            err.status=400
              err.status='fail'
              next(err)
        }
        catch(error){
            next(error)
        }

    }
    async handleAssignTask(req,res,next){
        const{phoneNumber,taskName}=req.body
        if(!phoneNumber || !taskName){
            const err=new Error('yes')
            err.status=400
              err.status='fail'
              next(err)
        }
        try{
            const user_id=await userservices.checkUser(phoneNumber)
            const task_id=await services.handleGetID(taskName)
            const assignit=await services.taskAssign(user_id,task_id)
        }
        catch(err){
            next(err)
        }
    }

    async handleAutoAssignTask(req,res,next){
        const{workersSize,userCoorDict,taskLatitude,taskLongitude,taskName}=req.body
        try{
            const task_ui=await services.handleGetID(taskName)
            const doauto=await services.handleAutoAssign(workersSize,userCoorDict,taskLatitude,taskLongitude,task_ui)
            if(doauto){
                return res.stats(200).json(doauto)
            }
            const err=new Error('couldn/t handle the dataset')
            err.status=400
              err.status='fail'
              next(err)
        }
        catch(error){
            next(error)
        }
    }
}
module.exports=new TaskControllers