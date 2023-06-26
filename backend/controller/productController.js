const Product=require("../model/product")

// Create Product Admin

const createProduct= async(req,res,next)=>{
   
    const product=await Product.create(req.body);

    res.status(201).json({
        status:"success",
        product
    })
   

}

//get All Product
const getAllProduct=async(req,res,next)=>{

    const product=await Product.find()

    res.status(200).json({
        status:"success",
        product
    })

}

const updateProduct=async(req,res,next)=>{

    const id=req.params.id;
    const payload=req.body
    const product=Product.findById({_id:id},payload)

    if(!product){
        return res.status(404).json({
            status:"fail",
            message:"no product found at that id"
        })
    }

    res.status(200).json({
        status:"success",
        product
    })


}

//Update product Admin
module.exports={createProduct,getAllProduct,updateProduct}