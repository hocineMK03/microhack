

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
    
    
    projectpriority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low'
    },
    projectStatus: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }



})

module.exports=mongoose.model('Project',projectSchema)