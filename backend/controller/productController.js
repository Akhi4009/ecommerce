const Product=require("../model/product")

const createProduct= async(req,res,next)=>{
   
    const product=await Product.create(req.body);

    res.status(201).json({
        status:"success",
        product
    })
   

}

const getAllProduct=async(req,res,next)=>{

    const product=await Product.find()

    res.status(200).json({
        status:"success",
        product
    })

   

}
module.exports={createProduct,getAllProduct}