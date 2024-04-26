

const mongoose = require('../config/db')
const Schema = mongoose.Schema;

const projectSchema = new Schema({

    projectName: {
        type: String,
        required: true,
        unique:true
    },
    projectDescription: {
        type: String,
        required: true
    },
    projectManager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    
    tasksObjects:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    }],
    
    
    
    dateCreated: {
        type: Date,
        default: Date.now
    }



})

module.exports=mongoose.model('Project',projectSchema)