import mongoose from "mongoose";

const TeamTypeSchema = new mongoose.Schema(
  {

    teamNames: 
    {
      type: String},
      DescriptionTeam: {
        type:String,
        enum:["balance"],
        default:"balance"
  
      },
    amountCharges: {
      type: String},
      isActive: {
        type:Boolean,
        default:true,
      },
    role: { type: String, enum: ["user", "UserManager"], default: "UserManager" },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Type= mongoose.model("Type", TeamTypeSchema);

export default Type;
