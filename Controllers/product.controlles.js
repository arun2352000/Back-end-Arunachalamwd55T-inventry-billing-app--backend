import Product from "../Models/product.schema.js";


export const createProduct = async(req,res) => {

    try{
        const userId = req.user._id
        
        const {productname,price, quantity, brand, product_id, userid } = req.body
        // const UserId =userId
        // console.log("hashPassword", hashPassword);


        const newProduct= new Product({productname,price, quantity, brand, product_id, userid : userId })
        await newProduct.save()
        // const product =new Product(req.body)
        // newProduct.userid=userId
        // await newProduct.save();

        res.status(200).json({data: newProduct});
        
    }catch(error){
         console.log(error);
    }
}


export const getAllProduct = async (req,res)=>{

    try{
        const userId = req.user._id
        console.log(userId);

        const product= await Product.find({userid: userId})
        console.log(product);
        res.status(200).json({message:"Autherised user", data:product} )
    } catch(error) {
        console.log(error);
        res.status(500).json({err:"internal error"})
    }
}


export const editProduct =async (req,res)=>{
    
}