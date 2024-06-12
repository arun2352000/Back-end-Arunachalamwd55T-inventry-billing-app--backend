import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    productname: String,
    price: String,
    quantity: String,
    brand: String,
    product_id: String,
    userid:String,

})
const User=mongoose.model('Product', userSchema)
export default User 