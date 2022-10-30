import jwt from "jsonwebtoken";
import dotenv from "dotenv";
export default class TokenAuth{
//function to generate
static generateToken(data){
    const token=jwt.sign(data,process.env.JWT_KEY,{expiresIn:"100000d"});
    return token;
}
//decode token
static decodeToken(token){ 
 const data=jwt.sign(token,process.env.JWT_KEY);
return data;
}
}