const mongoose = require('../config/db')
const Schema = mongoose.Schema;

const ratingSchema=new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ratings:{
        type:Number,
        default:2
    }

})