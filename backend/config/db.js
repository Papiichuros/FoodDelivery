import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://DeybDev:Cherryco2421@cluster0.dl0c7jb.mongodb.net/food-web').then(()=>console.log("DB Connected"));

}