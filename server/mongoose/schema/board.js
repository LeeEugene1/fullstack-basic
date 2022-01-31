//게시판 카테고리
const mongoose = require('mongoose')
const Comment = new mongoose.Schema({
    titie:{type:String, required:true, unique:true},
    url:{type:String, required:true, unique:true},
    createdAt:{type:Date,default:Date.now,required:true},
    
    //동적으로 변동될 수 있는 데이터

    //옵션: 사용자가 게시글에 추가할 수 있는 데이터
});

module.exports = Comment;