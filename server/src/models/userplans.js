const mongoose = require('../config/db')
const Schema = mongoose.Schema;

const userplansSchema = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan', // Reference to the Plan model
        required: true
    },
    currentProjectNumbers: {
        type: Number,
        default: 0
    },
    currentUserNumbers: {
        type: Number,
        default: 0
    },
    datePayed: {
        type: Date,
        default: Date.now
    },

})
module.exports=mongoose.model('Userplan',userplansSchema)