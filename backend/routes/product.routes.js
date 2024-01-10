const express=require("express")
const {protect,restrictTo} = require("../controller/authController");
const { getAllProduct, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controller/productController")

const router=express()
router.route("/create").post(protect,restrictTo('admin'),createProduct)
router.route("/getAllProduct").get(getAllProduct)
router.route("/:id")
.patch(protect,restrictTo('admin'),updateProduct)
.delete(protect,restrictTo('admin'),deleteProduct)
.get(getProductDetails)
module.exports=router