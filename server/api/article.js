const model = require('../mongoose/model')

// CREATE 
const articleCreate = async(req,res) =>{
    const { content } = req.body
    //모델안에 아티클에 값을 추가한다.
    const newArticle = await model.Article({content})
    const saveRequest = await newArticle.save()
    console.log(saveRequest)
    res.send(saveRequest)
}

// READ
const articleRead = async(req,res) =>{
    const { content } = req.body
    const articles = await model.Article.find({})
    res.send(articles)
}

// UPDATE
const articleUpdate = async(req,res)=>{
    const { id, content } = req.body
    const updatedArticle = await model.Article.findByIdAndUpdate(id, { content })
    res.send(updatedArticle)
}

// DELETE
const articleDelete = async(req,res)=>{
    const {id} = req.params
    const deleteArticle = await model.Article.findByIdAndRemove(id)
    res.send(deleteArticle)
}

module.exports = {
    articleCreate,
    articleRead,
    articleUpdate,
    articleDelete
}