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
   Duration: {
    startAt:Date,
    endAt:Date,

   },
   status:{
    type:String,
    enum:["pending","accept","cancel"],
    default:"pending"
   },
    DescriptionTeam: {
      type:String,
      enum:["balance"],
      default:"balance"

    },
    walletBalance: {
      type:String,
      enum:["balance","account","mobilemoney"],
      default:"account"
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
