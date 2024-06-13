import express from "express";
import { createCustomer, editCustomer, getAllCustomer } from "../Controllers/customer.controlles.js";
import authMiddleware from "../Middleware/auth.middleware.js";



const router =express.Router()
router.post('/createcustomer',authMiddleware,createCustomer)
router.get('/getallcustomer', authMiddleware, getAllCustomer)
router.put('/updatecustomer', editCustomer)
export default router