import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema(
  {

    userId: {type: Number},
    TeamName: { type: String},
    TeamTypeId: {type: String},
    startTime: { type:Date},

    startEnd: { type: Date},
    Description: {type: String},
    walletBalance: {type: String},
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Team= mongoose.model("Team", TeamSchema);

export default Team;
