const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter product name']
    },
    description:{
        type:String,
        required:[true,'Please enter product description']
    },
    price:{
        type:Number,
        required:[true,'Please enter product price'],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    image:[
    {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
],
category:{
    type:String,
    required:[true,'Pleas enter product category']
},
stock:{
type:Number,
required:[true,'Please enter product stock'],
default:1
},
numOfReviews:{
    type:Number,
    default:0
},
reviews:[
    {
        name:{
            type:String,
            required:true

        },
        reting:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }
],
createdAt:{
    type:Date,
    default:Date.now()
}
})

const Product=mongoose.model("Product",productSchema)

module.exports=Product