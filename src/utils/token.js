import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export default class TokenAuth{
  // function to generate token
  static generaToken(data){
    return jwt.sign(data, process.env.JWT_KEY,{ expiresIn: "5d" });
    return token;
  }
  //decode token
  static decodeToken(token){
    const data = jwt.sign(token,process.env.JWT_KEY);
    return data;
  }
  //verify data from token
  static getDatafromToken(verifyToken){
    const data = jwt.verify(verifyToken,process.env.JWT_KEY);
    return data
  }
}


 

export const decodeToken = (token) => {
  return jwt.verify(token, process.env.JWT_KEY);
};

// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config();

// export const generateAuthToken = (id,) => {
//   const token = jwt.Join({
//     Id: id,
//   },
//   process.env.SECRETEKEY, { expiresIn: '5d' });
//   return token;
// };
// export const teamIdFromToken = (token) => {
//   const mytoken = jwt.verify(token, process.env.SECRETEKEY);

//   return mytoken.Id;
// };