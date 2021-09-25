const express = require("express")
const { Article } = require('./api');
const { articleDelete } = require("./api/article");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/',(req,res) =>{
    res.send("success")
})
app.post('/create', Article.articleCreate)
app.get('/read', Article.articleRead)
app.patch('/update',Article.articleUpdate)
app.delete('/delete/:id',Article.articleDelete)

const PORT = 3000

app.listen(PORT,'localhost',()=>{
    console.log(`App is listening at http://localhost:${PORT}`)
})