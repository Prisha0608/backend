// console.log("chai aur code");
require('dotenv').config()
const express=require('express') // require module syntax with object express 
const app=express() //using express you make variable app like math 
const port=3000
// / is home route
// app listen at / home route and callback whenever request is send
app.get('/',(req,res)=>{
    res.send('hello world   gssd')
})

app.get('/twitter',(req,res)=>{
    res.send('whatsup')
})

app.get('/youtube',(req,res)=>{
    res.json({user:'tobi'})
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${port}`)
})