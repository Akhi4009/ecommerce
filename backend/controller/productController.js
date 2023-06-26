const Product=require("../model/product")
const catchAsync=require("../util/catchAsync")
const AppError=require("../util/appError")

// Create Product Admin

const createProduct= catchAsync(async(req,res,next)=>{
   
    const product=await Product.create(req.body);

    res.status(201).json({
        status:"success",
        product
    })
   

}
)

//get All Product
const getAllProduct=catchAsync(async(req,res,next)=>{

    const product=await Product.find()

    res.status(200).json({
        status:"success",
        product
    })

})

const getProductDetails=catchAsync(async(req,res,next)=>{
    

    const product= await Product.findById(req.params.id)
  console.log(product)
  if(!product){
    console.log("aky")
        return (next(new AppError("No product found with this tour id",404)))
    }

    res.status(200).json({
        staus:"success",
        product
    })

})
const updateProduct=catchAsync(async(req,res,next)=>{

    const ID=req.params.id;
    const payload=req.body
    
    
    const product= await Product.findByIdAndUpdate({_id:ID},payload)

    if(!product){
        return next(new AppError("Product not found with this id",404))
    }

    res.status(200).json({
        status:"success",
        message:"updated"
    })
})

const deleteProduct=catchAsync(async(req,res,next)=>{

    const Id=req.params.id
    await Product.findByIdAndDelete({_id:Id})
    res.status(200).send("deleted")
})
//Update product Admin
module.exports={createProduct,getAllProduct,updateProduct,deleteProduct,getProductDetails}