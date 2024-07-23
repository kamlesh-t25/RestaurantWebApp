import jwt from 'jsonwebtoken';


const authMiddleware=async(req,res,next)=>{
    //req.headers is a object containg all key-value pairs passed in header
    const {token}=req.headers;
    if(!token){
        return res.json({success:false,message:"Not authorized Login Again"});
    }

    try {
        //for verifing the token
        const decode_token=jwt.verify(token,process.env.SECRET_KEY);
        req.body.userId=decode_token.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

export default authMiddleware;