const express=require('express')
require('dotenv').config()
const connection=require("./db")

const app=express()


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to db")
    }catch(err){
        console.log({"msg":"not connected to db",err:err.message})
    }
    console.log(`server is working on ${process.env.port}`)
})