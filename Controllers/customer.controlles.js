import Customer from "../Models/customer.schemea.js";

export const createCustomer = async (req, res) =>{

    try {
        
        const userId = req.user._id
        const {companeyname, gstno, adress, customername, numbr, emailadress, user_id } = req.body
        const newProduct= new Customer({companeyname, gstno, adress, customername, numbr, emailadress, user_id : userId })
        await newProduct.save()
        res.status(200).json({data: newProduct});

    } catch (error) {
        console.log(error);
    }
}

export const getAllCustomer = async (req, res) =>{
    
    try {
        
        const userId = req.user._id

        const customer= await Customer.find({user_id: userId})
        console.log(customer);
        res.status(200).json({message:"Autherised user", data:customer })

    } catch (error) {
        console.log(error);
    }

}

