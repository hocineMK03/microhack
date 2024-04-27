
const mongoose = require('../config/db')
const Schema = mongoose.Schema;

const taskSchema = new Schema({


    taskName: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
        required: true
    },
    taskParentProject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    taskManager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
  
    taskNeededworkers: {
        type: Number,
        default: 0
    },
    tasktags: [{
        type: String
    }],
    taskpriority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low'
    },
    taskStatus: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
    taskLatitude: {
        type: Number,
        default:0
    },
    taskLongitude: {
        type: Number,
        default:0
    },

    dateCreated: {
        type: Date,
        default: Date.now
    }

})
module.exports=mongoose.model('Task',taskSchema)