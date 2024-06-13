import express from "express";
import { createCustomer, getAllCustomer } from "../Controllers/customer.controlles.js";
import authMiddleware from "../Middleware/auth.middleware.js";



const router =express.Router()
router.post('/createcustomer',authMiddleware,createCustomer)
router.get('/getallcustomer', authMiddleware, getAllCustomer)

export default router