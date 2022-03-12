const express = require("express")
const bodyparser = require("body-parser")
const path = require("path")
const app = express();
//engine
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
app.use('/public',express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname,'/pages'));
//rotas
app.get("/",(req,res)=>{
    res.render('home',{})
})
app.get("/:rei",(req,res)=>{
    if(req.params.rei == "bolo-de-cenoura"){
        res.render('boldeceno',{})
    }else if(req.params.rei == "brigadeiro"){
        res.render('briga',{})
    }else if(req.params.rei == "petit"){
        res.render("petit",{})
    }else if(req.params.rei == "bolo-de-chocolate"){
        res.render("boldechoc",{})
    }else if(req.params.rei == "pudim"){
        res.render("pudim",{})
    }

})

const PORT = process.env.PORT || 8080
app.listen(PORT,(req,res)=>{
    console.log("funfo")
})