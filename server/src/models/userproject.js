const mongoose = require('../config/db')
const Schema = mongoose.Schema;


const userprojectSchema=new Schema({

    projectUsers:
        {
            type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    usertag:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('Userproject',userprojectSchema)