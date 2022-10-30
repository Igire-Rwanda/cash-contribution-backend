import mongoose from "mongoose";

const TeamTypeSchema = new mongoose.Schema(
  {

    teamNames: {type: String},
    description: { type: String},
    amountCharges: {type: String},
  
    role: { type: String, enum: ["user", "UserManager"], default: "UserManager" },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Type= mongoose.model("Type", TeamTypeSchema);

export default Type;
