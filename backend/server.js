// mongodb+srv://kamleshtakhar2783:kamlesh123456@cluster0.qgdbvfl.mongodb.net/?

import express from 'express';
import { connectDB } from './config/db.js';
import mongoose from 'mongoose';
import cors from 'cors';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
// import './.env';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


const PORT=4000;
const app=express();

//middleware
app.use(express.json());
app.use(cors());

//connect DB
connectDB();


app.get("/",(req,res)=>{
    res.send("API working");
})


app.use('/api/food',foodRouter);

// ***
// After uploading an image to the uploads directory, you can access it via a URL like
//  http://localhost:3000/images/your-image-file.jpg.

// app.use('/images', express.static('uploads'));: This line maps the /images URL path to the uploads directory,
//  enabling you to access files stored in uploads via URLs that start with /images.
app.use('/images',express.static('uploads'));

app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})