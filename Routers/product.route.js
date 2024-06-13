import express from "express";
import { createProduct, deleteProduct, editProduct, getAllProduct } from "../Controllers/product.controlles.js";
import authMiddleware from "../Middleware/auth.middleware.js";


const router =express.Router()

router.post('/createproduct', authMiddleware, createProduct)
router.get('/getallproduct', authMiddleware, getAllProduct)
router.put('/updateproduct', editProduct)
router.delete('/deleteproduct/.id',deleteProduct)
export default router