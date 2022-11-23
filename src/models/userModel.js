import mongoose from "mongoose";
const joi = require('joi')

const UserSchema = new mongoose.Schema(
  {

    names: {type: String},
    email: { type: String,
      unique: true,
      required: true },

      phone: {type:String}, 
    password: {type: String},
     
    isActive: {
      type:Boolean,
      default:true,

    },

    role: { type: String, enum: ["user", "userManager","admin"], default: "user" },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);
export default mongoose.model('user',UserSchema)

// const User= mongoose.model("user", UserSchema);
// const validate = (user)=>{
//   const UserSchema = joi.object({
//     names:joi.string().required(),
//     email:joi.string().email().required(),
//     phone:joi.string().required(),
//     password:joi.string().required()
//   })
//   return UserSchema.validate(user)
// }
// module.exports={User,validate}
// export default User;
