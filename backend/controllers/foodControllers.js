import foodModel from "../models/foodModel.js";
import fs from 'fs';


//for adding a food
const addFood=async(req,res)=>{
    let image_fileName=`${req.file.filename}`;

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_fileName
    })
    try{await food.save();
        res.json({success:true,message:"Food added"});
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error in adding Food"});
    }
}


//to display list of food items
const listFood=async(req,res)=>{
    try {
        const foods=await foodModel.find({});
        res.json({successs:true,data:foods});
    } catch (error) {
        res.json({success:false,message:"Error"});
    }
}

//to delete a food item using id  ##do not forget to use await
const deleteFood=async(req,res)=>{
    try {
        const food=await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});

        await foodModel.deleteOne({_id:req.body.id});
        res.json({success:true,dataDeleted:food});
    } catch (error) {
        res.json({success:false,message:"Error"});
    }
}


export {addFood,listFood,deleteFood};