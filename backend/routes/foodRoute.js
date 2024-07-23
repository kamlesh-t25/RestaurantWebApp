import express from 'express';
import {addFood, deleteFood, listFood} from '../controllers/foodControllers.js';
import multer from 'multer';

const foodRouter=express.Router();

// const storage=multer.diskStorage({destination:"uploads",
//     filename:(req,res,cb)=>{
//         return cb(null,`${Date.now()}${req.file.originalname}`);
//     }
// })

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        if (file) {
            cb(null, `${Date.now()}${file.originalname}`);
        } else {
            cb(new Error('No file uploaded'), '');
        }
    }
});


const upload=multer({storage:storage});


//food routes
foodRouter.post('/add',upload.single("image"),addFood);
foodRouter.get('/list',listFood);
foodRouter.post('/remove',deleteFood);



export default foodRouter;