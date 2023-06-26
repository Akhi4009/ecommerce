const express=require("express")
const { getAllProduct, createProduct, updateProduct } = require("../controller/productController")

const router=express()
router.route("/create").post(createProduct)
router.route("/getAllProduct").get(getAllProduct)
router.route("/:").patch(updateProduct)

module.exports=router