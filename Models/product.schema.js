import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productname: String,
    price: String,
    quantity: String,
    brand: String,
    product_id: String,
    userid:String,

})
const Product=mongoose.model('Product', productSchema)
export default Product 