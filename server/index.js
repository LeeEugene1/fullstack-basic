const express = require("express")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/',(req,res) =>{
    res.send("success")
})

const PORT = 3000

app.listen(PORT,'localhost',()=>{
    console.log(`App is listening at http://localhost:${PORT}`)
})