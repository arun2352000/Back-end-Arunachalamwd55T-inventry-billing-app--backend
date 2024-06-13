import Customer from "../Models/customer.schemea.js";

export const createCustomer = async (req, res) =>{

    try {
        
        const userId = req.user._id
        const {productname,price, quantity, brand, product_id, userid } = req.body
        const newProduct= new Customer({productname,price, quantity, brand, product_id, userid : userId })
        await newProduct.save()
        res.status(200).json({data: newProduct});

    } catch (error) {
        console.log(error);
    }
}