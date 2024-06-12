import mongoose, { connect } from 'mongoose'
import configDotenv  from 'dotenv'

configDotenv.config()
const mongoURL = process.env.MONGODBCONNECTIONSTRING
const connectDB= async()=>{
    try{
        const connection= await mongoose.connect(mongoURL)
        console.log("connect to the mongodb")
        return connection
    }
    catch(error){
        console.log("error", error);
    }
}


export default connectDB