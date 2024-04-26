
const mongoose = require('../config/db')
const Schema = mongoose.Schema;

const plansSchema = new Schema({

    planName: {
        type: String,
        required: true
    },
    planDescription: {
        type: String,
        required: true
    },
    planPrice: {
        type: Number,
        required: true
    },
    planFeatures: [{
        type: String,
        default: []
    }],
    planUserNumbers: {
        type: Number,
        default: 5
    },
    planTasksNumbers: {
        type: Number,
        default: 10
    },
    planProjectsNumbers: {
        type: Number,
        default: 3
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }



})
module.exports=mongoose.model('Plan',plansSchema)