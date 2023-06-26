const AppError=require("../util/appError")
module.exports=(err,req,res,next)=>{

    err.statuscode=err.statuscode || 500;
    err.status=err.status || 'error';

    // Wrong Mongodb Id error
    if(err.name==="CastError"){
        const message=`Resource not found. Invalid: ${err.path}`;
        err=new AppError(message,400)
    }
    res.status(err.statuscode).json({
        status:err.status,
        message:err.message 
   });
}