import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    companeyname: String,
    gstno: String,
    adress: String,
    customername: String,
    numbr: String,
    emailadress:String,
    user_id:String,

})
const Customer=mongoose.model('Customer', customerSchema)
export default Customer 