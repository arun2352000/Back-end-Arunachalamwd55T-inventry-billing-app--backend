import User from "../Models/user.schema.js";
import bcrypt from 'bcryptjs'


export const registerUser = async(req, res)=>{
    try {
            const {username, email, password} = req.body
            const hashPassword = await bcrypt.hash (password ,10)
            console.log("hashPassword", hashPassword);


            const newUser= new User({username, email, password: hashPassword})
            await newUser.save()

        res.status(200).json({message: "Register Successful", data: newUser})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'register Failed, Internal server error'})
    }
}
export const loginUser = async(req, res)=>{
    try {
        const{email, password} =  req.body
        const user= await User.findOne({email})
        if (!user) {
            return res.status(401).json({message:"user not found"})
        }

        const passwordMatch = await bcrypt.compare(password,user.password)
        if (!passwordMatch) {
            return res.status(401).json({message:"Invalid Password"})
        }

        res.status(200).json({message: "login Successful"})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Login Failed, Internal server error'})
    }
}
