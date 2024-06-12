import express from 'express'
import { getAllUser, loginUser, registerUser } from '../Controllers/user.controllers.js'
import authMiddleware from '../Middleware/auth.middleware.js'
const router= express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)

router.get('/getuser',authMiddleware, getAllUser)

export default router;