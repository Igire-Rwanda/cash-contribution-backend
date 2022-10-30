import mongoose from "mongoose";

const participantSchema = new mongoose.Schema(
  {

    teamId: {Number},
    userId: { Number},
    status: {type: String},
    status: { isActive: true, disActive: false },
  
    

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const participant= mongoose.model("Type", participantSchema);

export default participant;
