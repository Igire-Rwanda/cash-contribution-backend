import mongoose from "mongoose";

const contibutionSchema = new mongoose.Schema(
  {

    UserId: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Team"
    },
    TeamId: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"user"
    },
    reference: {
        String
      },
      status:{
        type:String,
        enum:["pending","accept","cancel"],
        default:"accept"
       },
    isActive: { 
      type: Boolean, 
      default: true},
  },
  { timestamps: true }
);

const participant= mongoose.model("teamMembers", contibutionSchema);

export default contribution;
