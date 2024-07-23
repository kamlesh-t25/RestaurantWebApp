import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://kamleshtakhar2783:kamlesh123456@cluster0.qgdbvfl.mongodb.net/food-app").then(()=>{
        console.log("DB connected");
    })
}