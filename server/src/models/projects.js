

const mongoose = require('../config/db')
const Schema = mongoose.Schema;
const today = new Date();
const deadlineDate = new Date(today);
deadlineDate.setDate(today.getDate() + 3);
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
        enum: ['pending','on progress', 'completed'],
        default: 'pending'
    },
    deadline:{
        type:Date,
        default:deadlineDate
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }



})

module.exports=mongoose.model('Project',projectSchema)