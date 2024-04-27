
const userServices = require('../services/userServices')
const project=require('../models/projects')
const userproject=require('../models/userproject')
class ProjectServices{

    async getProjectID(projectName){
      try{
        const getid=await project.findOne({
          projectName:projectName
        })
        return getid
      }
      catch(err){
        console.error(err)
          throw new Error('An error occured')
      }
    }

    async handleAddTasks(projectName,task_id,user_id){
      console.log("here",projectName,user_id)
      try{
        const findProject=await project.findOne({
          projectName:projectName
        })
        console.log(findProject)
        if (findProject) {
            if (!findProject.projectUsers) {
                findProject.projectUsers = []; // Initialize projectUsers as an empty array
            }
            findProject.tasksObjects.push(task_id); // Append worker_id to projectUsers array
            
            
            await findProject.save();
            return true
      }
      
      return false

    }
    catch(err){
      console.error(err)
      throw new Error('An error occured')
    }
  }
    async handleAddUsers(projectName,user_id,worker_id,tag){

        try{

            const findProject=await project.findOne({
              projectName:projectName,
              projectManager:user_id
            })
            console.log("here",findProject)
            

            const proj=await userproject.create({projectUsers:worker_id,project:findProject._id,usertag:tag})
            if(proj){
            return true;
            }
          
            return false
          }

        catch(err){
          console.error(err)
          throw new Error('An error occured')
        }

    }


    async handleCreateProject(projectName,projectDescription,creator,projectpriority,projectStatus){

       
    
       try{
        const proj=await project.create({projectName,projectDescription,projectManager:creator,projectpriority,projectStatus})
        if(proj){
            
            return proj
        }
        const err=new Error('couldnt create project')
        err.status=400
        throw err
       }
         catch(error){
            console.error(error)
              throw new Error('An error occured')
         }

    }


    async handleDeleteProject(projectName,user_id){

      try{
         
        const projectToDelete=await project.findOneAndDelete({
          projectName:projectName,
          projectManager:user_id
        })

        if(projectToDelete){
          return true
        }
        return false
      }
      catch(error){
        console.error(error)
              throw new Error('An error occured')
      }
    }
    
    // async handleUpdateProject(projectName,projectDescription,user_id){



    // }
    async displayProjects(){
      try{
        const result=await project.find({}, { _id: 1, projectName: 1, projectDescription: 1,projectpriority:1,projectStatus:1, tasksObjects: 1 })
        if(result){return result}
        return null
      }
      catch(err){
        throw new Error('couldn\'t find users')
      }
    }
    async deleteATaskFromAProject(task_id,project_id){

      try{

      }
      catch(err){
        throw new Error('something happenned')

      }
    }
}
module.exports=new ProjectServices