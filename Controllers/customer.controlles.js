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

export const editCustomer  =async (req,res)=>{
    try {
        
        const {companeyname, gstno, adress, customername, numbr, emailadress } = req.body

        const customer= await Customer.findOne({emailadress})
        if (!customer) {
            return res.status(401).json({message:"customer not found"})
        }

        customer.companeyname=companeyname
        customer.gstno=gstno
        customer.adress=adress
        customer.customername=customername
        customer.numbr=numbr
        await customer.save()

        res.status(200).json({message:"data updated", customer:customer})

    } catch (error) {
        console.log(error);
    }

}