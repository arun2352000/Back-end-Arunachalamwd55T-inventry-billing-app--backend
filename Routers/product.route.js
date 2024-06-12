import express from "express";
import { createProduct } from "../Controllers/product.controlles.js";


const router =express.Router()

router.post('/createproduct', createProduct)

export default router