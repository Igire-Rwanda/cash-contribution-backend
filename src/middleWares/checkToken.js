
import jwt from 'jsonwebtoken'

const checkToken = (req,res,next)=>{
    try {
    const authorization = req.headers['authorization'];
    if(authorization){
        const tokenvalid = jwt.verify(authorization,"ooooooooooooo");
        req.userId=tokenvalid.user._id;
        next();
    }else{
        return res.status(401).json({message:"not logged in"});
    }
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export default checkToken;