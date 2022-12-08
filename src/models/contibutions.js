import mongoose from "mongoose";

const contributionSchema = new mongoose.Schema(
  {

    UserId: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"user"
    },
    TeamId: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"team"
    },
    reference: {
        type:String,
      },
      status:{
        type:String,
        enum:["pending","success","failed"],
        default:"pending"
      },
      amount:{
        type:Number
      }
  }
);

const contribution= mongoose.model("contributions", contributionSchema);

export default contribution;