import mongoose, { Mongoose } from "mongoose";

const TeamSchema = new mongoose.Schema(
  {

    TeamAdmin: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"UserId"
    },
    TeamName: { type: String},
    TeamTypeId: {
      type:mongoose.SchemaTypes.ObjectId,
      ref:"TeamId"
    },
  
  //  status:{
  //   type:String,
  //   enum:["pending","accept","cancel"],
  //   default:"accept"
  //  },
    DescriptionTeam: {
      type:String,
    },
    walletBalance: {
      type:Number,
      default:"0"
    },
    amount:{
        type:String,
    },
    isActive: {
      type:Boolean,
      default:true,
    },
  },
  { timestamps: true }
);

const Team= mongoose.model("Team", TeamSchema);

export default Team;
