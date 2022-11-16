import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {

    names: {type: String},
    email: { type: String,
       unique: true,
        required: true },
    password: {type: String},
    address: { 
      state: String, 
      city: String },

    role: { type: String, enum: ["user", "userManager","admin"], default: "user" },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User= mongoose.model("user", UserSchema);

export default User;
