import mongoose from "mongoose";

const WalletSchema = new mongoose.Schema(
  {
    PaymentId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"PaymentId"
      },
    
      paymentModel: {
        type:String,
        enum:["mobileMoney","team"],
        default:"team"
  
      },
      transactionType: {
        type:String,
        enum:["cashin","cashout"],
        default:"cashin"
  
      },
      reasonTransaction:{
        type:String,


      },
    role: { type: String, enum: ["user", "UserManager"], default: "user" },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Trans= mongoose.model("type", WalletSchema);

export default Trans;
