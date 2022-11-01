import mongoose, { Mongoose } from "mongoose";

const TeamSchema = new mongoose.Schema(
  {

    participatId: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"participatId"
    },
    status: { 
        type: String,
        enum:["pedding","Approved"]

    },
    Doneby: {
    type:mongoose.Schema.Types.ObjectId,
    ref:["participantId","teamId"]
    },
   Reason: {
    type:String,

   },
   status:{
    type:String,
    enum:["pending","accept","cancel"],
    default:"pending"
   },
    
  },
  { timestamps: true }
);

const Team= mongoose.model("Team", TeamSchema);

export default Team;
