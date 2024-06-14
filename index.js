const express = require('express')
const { v4:uuidv4 }=require("uuid")
uuidv4()
const app=express()

const  port=3000;

const  path=require('path')

app.set('view engine','ejs')
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended:true}));



// get post  implementation

// get /posts get data for  all  post

let posts = [
    {
        id:uuidv4(),
        username:'apnacollege',
        content:'i love  coding',

    },
    {
        id:uuidv4(),
        username:'shradhhakhapra',
        content:'hard  work is  imp',

    },
    {
        id:uuidv4(),
        username:'aryangupta',
        content:'i got  selected forr  internship',

    },
]

app.get("/post",(req,res)=>{
    res.render("index.ejs",{posts})
})

//post /post

app.get("/post/new",(req,res)=>{
    res.render("form.ejs")
})

// app.post("/post",(req,res)=>{
//     let {username,content}=req.body
//     posts.push({username,content})
//     res.render("index.ejs",{posts})
// })


//redirect

app.post("/post",(req,res)=>{
    let {username,content}=req.body
    let id=uuidv4() //doubt
    posts.push({id,username,content})
    res.redirect("/post")
})


// get/post/:id

app.get("/post/:id",(req,res)=>{
    let {id}=req.params
    let post=posts.find((p)=> id===p.id )
    console.log(post)
    res.render('show.ejs',{post})
})

// patch/post/:id

app.patch("/post/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id)
    console.log(req.body)
    // let { newContent } = req.body.content
    // console.log(newContent)
    // console.log(post.content)
    let post=posts.find((p)=> id===p.id )
    // console.log(post.content)
    // post.content=newContent
    console.log(post)
})


app.listen(port,()=>{
    console.log(`app listening  at port ${port}`)
    console.log(__dirname)
})