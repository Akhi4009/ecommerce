const express=require("express")
const { getAllProduct, createProduct, updateProduct, deleteProduct } = require("../controller/productController")

const router=express()
router.route("/create").post(createProduct)
router.route("/getAllProduct").get(getAllProduct)
router.route("/:id")
.patch(updateProduct)
.delete(deleteProduct)
module.exports=router