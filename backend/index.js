const express=require('express')
require('dotenv').config()
const connection=require("./db")

//router
const productRouter=require("./routes/product.routes")
const userRouter=require("./routes/user.routes")
// Error
const AppError=require("./util/appError")
const globalErrorHandler=require("./midlleware/error")

const app=express()
app.use(express.json())

//router
app.use("/product",productRouter)
app.use("/users",userRouter)

// error

app.all('*',(req,res,next)=>{
    next(new AppError(`Can't find ${req.originalUrl} on this server`,404))

})

app.use(globalErrorHandler)
app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to db")
    }catch(err){
        console.log({"msg":"not connected to db",err:err.message})
    }
    console.log(`server is working on ${process.env.port}`)
})