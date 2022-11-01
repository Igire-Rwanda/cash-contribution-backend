import mongoose from "mongoose";

const participantSchema = new mongoose.Schema(
  {

    TeamId: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"TeamId"
    },
    UserId: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"UserId"
    },
    isActive: { 
      type: Boolean, 
      default: true},
  },
  { timestamps: true }
);

const participant= mongoose.model("Type", participantSchema);

export default participant;
