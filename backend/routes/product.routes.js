const express=require("express")
const { getAllProduct, createProduct } = require("../controller/productController")

const router=express()
router.route("/create").post(createProduct)
router.route("/getAllProduct").get(getAllProduct)

module.exports=router