const express=require("express")
const app=express()

app.get("/login",(req,res)=>{
    res.send("login page")
})



app.get("/about",(req,res)=>{
    res.send("about page")
})

app.listen(3000,()=>{
    console.log("server is ruuning")
})
