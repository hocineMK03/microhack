const tasks=require('../models/tasks')
const usertasks=require('../models/usertasks')
const coordinations=require('../utils/coordinating')
class TaskServices{

    async  handleCreateTask(taskName, taskDescription,taskNeededworkers, creator, tasktags, taskpriority, taskStatus, project_id,longtitude,laltitude) {
        try {
            let long=longtitude || 0.0
            let lalt=laltitude || 0.0
            const tasktagsArray=Array.isArray(tasktags) ? tasktags : [tasktags];
            const task = await tasks.create({
                taskName,
                taskParentProject: project_id,
                taskDescription,
                tasktags: tasktagsArray,
                taskpriority,
                taskStatus,
                taskNeededworkers,
                taskLatitude:lalt,
                taskLongitude:long
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
            query.taskParentProject=projectName
        }
        if(priority){
            query.taskpriority=priority
        }
        if(progress){
            query.taskStatus=progress
        }
        
        try{
            const result=await tasks.find(query)
            if(result){
                console.log(result)
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
    

async  handleAutoAssign(workersSize, userCoorDict, taskLatitude, taskLongitude, task_id) {
    try {
        const nearestWorkers = coordinations.getTheNearestWorkers(workersSize, userCoorDict, taskLatitude, taskLongitude);
        console.log(nearestWorkers)
        // Create an array of promises for each task creation
        const createTaskPromises = nearestWorkers.map(async (worker) => {
            const seeifassigned=await usertasks.findOne({taskworker:worker.id,taski:task_id})
            if(seeifassigned){
                return
            }
            
            return usertasks.create({
                taskworker: worker.id,
                taski: task_id
            });
        });
        
        // Wait for all task creations to complete
        await Promise.all(createTaskPromises);
        return nearestWorkers
    } catch (error) {
        console.error(error);
        throw error;
    }
}


async getCoodinates(task_id){

    try{
        const gettask=await tasks.findOne({_id:task_id})
        if(gettask){
            const { taskLongitude, taskLatitude } = gettask;
            return { taskLongitude, taskLatitude };
        }
        return null
    }
    catch(err){
        throw new Error('An error occured')
    }

}

}
module.exports= new TaskServices