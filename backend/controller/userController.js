const User = require("../model/userModel")
const catchAsync = require("../util/catchAsync")
const APIFeatures=require("../util/apiFeature")
const AppError =require("../util/appError")

const filteredObj=(obj,...allowedfields)=>{
   
    const newObj={}
    Object.keys(obj).forEach(ele=>{
        if(allowedfields.includes(ele)){
            newObj[ele]=obj[ele]
        }
    })
    return newObj
}

const getUser= catchAsync (async(req,res,next)=>{
    const features=new APIFeatures(User.find(),req.query).filter().sort().LimitFields().Pagination()

    const users=await features.query
        res.status(200).send({status:true,result:users.length,data:users})
  
        })

const updateMe=catchAsync(async(req,res,next)=>{

    // create error if user posts password data
    if(req.body.passwprd || req.body.passwordConfirm){
        return next(AppError('This route is not for password updates. please use /updatepassword.',400))

    }

    // update user document
    
    const filteredBody=filteredObj(req.body,'name','email')
    
    const updatedUser=await User.findByIdAndUpdate(req.user.id,filteredBody,{
        new:true,
        runValidators:true
    })
    res.status(200).json({
        status:"success",
        user:updatedUser

    })
})

const deleteMe=catchAsync(async(req,res,next)=>{

    await User.findByIdAndUpdate(req.user.id,{active:false})

    res.status(200).json({
        status:"success",
        data:null
    })

})
  module.exports ={getUser,updateMe,deleteMe}