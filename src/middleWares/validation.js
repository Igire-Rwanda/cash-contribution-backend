import { check,validationResult } from "express-validator";
//import User from "../models/userModel"

class Validator{

    static validateInput=(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const errorMessage=errors.errors.map((err)=>err.msg);
            return res.status(400).json({
                status:400,
                message:errorMessage
            })
        }
        return next();
    }
    static newAccountRules(){
        return[
            check("email","please your email is envalid").isEmail(),
            check("Name","please your CName have a special Character").isAlpha(),
           
            check("phone","your phone number is invalid").isMobilePhone(),
           
            check("password","password must be wrong").isStrongPassword()
        ];
    }
    static checkId(){
        return [check("id","id should be mongoId")
    ]
    }
}
export default Validator;