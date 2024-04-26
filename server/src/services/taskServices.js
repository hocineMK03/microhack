const tasks=require('../models/tasks')
const usertasks=require('../models/usertasks')

class TaskServices{

    async  handleCreateTask(taskName, taskDescription,taskNeededworkers, creator, tasktags, taskpriority, taskStatus, project_id) {
        try {
            const tasktagsArray=Array.isArray(tasktags) ? tasktags : [tasktags];
            const task = await tasks.create({
                taskName,
                taskParentProject: project_id,
                taskDescription,
                tasktags: tasktagsArray,
                taskpriority,
                taskStatus,
                taskNeededworkers
            });
            if (task) {
                return task;
            }
            const err = new Error('Could not create task');
            err.statusCode = 400;
            throw err;
        } catch (error) {
            console.error(error);
            throw new Error('An error occurred');
        }
    }
    


    async handleDisplayTasks(user_id,priority,progress,projectName){

        let query={}
        if(projectName){
            query.projectName=projectName
        }
        if(priority){
            query.taskpriority=priority
        }
        if(progress){
            query.progress=progress
        }

        try{
            const result=await tasks.find(query)
            if(result){
                return result
            }
            return null
        }
        catch(err){
            throw new Error('An error occured')
        }
    }


    async taskAssign(user_id,task_id){
        try{
            const assignit=await usertasks.create({
                taskworker:user_id,
                taski:task_id,

            })
            if(assignit){
                return assignit
            }
            return null

        }
        catch(err){
            throw new Error('An error occured')
        }
    }
    async handleDisplayTasksByID(task_id){
        if(!task_id){
            
            throw new Error('An error occured , task_id not found')
        }
        try{

            const gettasks=await tasks.find({_id:task_id})
            if(gettasks){
                return gettasks
            }
            return null
        }
        catch(err){
            throw new Error('An error occured')
        }
    }

    async handleDeleteTask(task_id){
        try{
            
            const tasktodelete=await tasks.findOneAndDelete({_id:task_id})
            console.log(tasktodelete)
            if(tasktodelete){
                // delete from the project
                return true
                
               

               
            }
            return false
        }
        catch(error){
            const err = new Error(error);
            err.statusCode = 500;
            throw err;
        }

    }

    async handleGetID(taskName){

        try{

            const getid=await tasks.findOne({taskName:taskName})
            return getid
        }
        catch(error){
            const err = new Error(error);
            err.statusCode = 500;
            throw err;
        }
    }


}
module.exports= new TaskServices