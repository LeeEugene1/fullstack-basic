const mongoose = require('mongoose')
const User = new mongoose.Schema({
    email:{
        type:String, required:true, unique:true
    },
    password:{},
    createdAt: {type:Date, default:Date.now}
//     nickname:{
//         type:String,
//         default:"",
//         required:true,
//         unique:true
//     },
//     hashedPassword:{
//         type:String,
//         required:true
//     },
//     createdAt:{
//         type:Date,
//         default:Date.now,
//         required:true
//     }
});

module.exports = User;