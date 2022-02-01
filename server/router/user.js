const express = require('express')
const router = express.Router()
const {User} = require('../mongoose/model')

router.post('/user/login', async (req, res) =>{
//개별 개시글을 가져오는 라우트
    const {email, password} = req.body
    const loginUser = await User.find({email:email})
    if(!loginUser._id){
        return res.send({
            error:true,
            msg:'there is no email address'
        })
    }
    const correctPassword = await loginUser.authenticate(password)
    if(!correctPassword){
        return res.send({
            error:true,
            msg:'password fail'
        })
    }
    res.send({email:loginUser.email, nickname:loginUser.nickname})
})

// add user
router.post('/user/create', async (req,res)=>{
    const{nickname, email, password} = req.body
    const newUser = await User({
        email,nickname,password
    }).save()

    console.log(newUser)
    res.send(newUser._id ? true : false)
})

//사용자정보변경
//사용자삭제
//프로필이미지추가

module.exports = router