const mongoose = require('mongoose')
const Article = new mongoose.Schema({
    // author:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Author",
    // },
    content:{
        type:String,
        default:"",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        required:true
    }
});

module.exports = Article;