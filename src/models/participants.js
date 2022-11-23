import mongoose from "mongoose";

const participantSchema = new mongoose.Schema(
  {

    TeamId: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Team"
    },
    UserId: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"user"
    },
    isActive: { 
      type: Boolean, 
      default: true},
  },
  { timestamps: true }
);

const participant= mongoose.model("teamMembers", participantSchema);

export default participant;
