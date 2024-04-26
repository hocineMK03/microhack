



const mongoose = require('../config/db')
const Schema = mongoose.Schema;


const userSchema = new Schema({

    
    username: {
                type: String,
            },
            email: {
                type: String,
                required: true,
                unique: true
            },
            phoneNumber: {
                type: Number,
                required: true,
                unique: true
            },
            password: {
                type: String,
                required: true
            },
            role: {
                type: String,
                enum: ['worker','task manager', 'project manager'],
                default: 'worker'
            },
            createdBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User' ,
                default:null
            },
            dateCreated: {
                type: Date,
                default: Date.now
            }

})

module.exports=mongoose.model('User',userSchema)