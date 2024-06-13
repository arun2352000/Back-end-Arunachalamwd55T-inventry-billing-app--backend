import express from "express";
import { createProduct, getAllProduct } from "../Controllers/product.controlles.js";
import authMiddleware from "../Middleware/auth.middleware.js";


const router =express.Router()

router.post('/createproduct', authMiddleware, createProduct)
router.get('/getallproduct', authMiddleware, getAllProduct)

export default router