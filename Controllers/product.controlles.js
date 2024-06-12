import Product from "../Models/product.schema.js";


export const createProduct = async(req,res) => {

    try{
        const product =new Product(req.body)
        await product.save();

        res.status(200).json({data: product});
        
    }catch(error){
         console.log(error);
    }
}