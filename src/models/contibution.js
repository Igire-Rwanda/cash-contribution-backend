import mongoose from "mongoose";

const contributionSchema = new mongoose.Schema(
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
        enum:["pending","success","failed"],
        default:"pending"
      },
       { timestamps: true 
      },
  };
);

const participant= mongoose.model("contributions", contributionSchema);

export default contribution;
