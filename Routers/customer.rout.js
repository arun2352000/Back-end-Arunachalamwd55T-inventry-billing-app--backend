import express from "express";
import { createCustomer } from "../Controllers/customer.controlles.js";
import authMiddleware from "../Middleware/auth.middleware.js";



const router =express.Router()
router.post('/createcustomer',authMiddleware,createCustomer)

export default router