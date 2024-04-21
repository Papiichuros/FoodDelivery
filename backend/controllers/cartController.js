import userModel from "../models/userModel.js"

// Add items to user cart
const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findOne({_id:req.body.userId});
        let carData = await userData.carData;
        if(!carData[req.body.itemId])
        {
            carData[req.body.itemId] = 1;
        }
        else {
            carData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {carData});
        res.json({success:true, message:"Added To Cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// Remove items from user cart
const removeFromCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let carData = await userData.carData;
        if (carData[req.body.itemId] > 0) {
            carData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {carData});
        res.json({success:true, message:"Removed From Cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// Fetch user cart data
const getCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let carData = await userData.carData;
        res.json({success:true, carData})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {addToCart, removeFromCart, getCart}