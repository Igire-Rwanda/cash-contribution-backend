import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
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

const Type= mongoose.model("Type", TransactionSchema);

export default Type;
