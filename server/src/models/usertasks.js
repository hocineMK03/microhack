const mongoose = require('../config/db')
const Schema = mongoose.Schema;

const usertasksShema=new Schema({
    taskworker:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    taski:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    },
    dateCreated:{
        type: Date,
        default: Date.now
    }

})