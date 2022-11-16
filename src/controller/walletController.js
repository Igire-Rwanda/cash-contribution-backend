import userwalletetTransaction from "../models/transactionModel";
import handleCRUD from "../utils/handleCRUD";
 const createWallet = handleCRUD.creatOne(userwalletetTransaction);
const getAllWallet = handleCRUD.getAll(userwalletetTransaction);
const UpdateOneWallet = handleCRUD.updateOneById (userwalletetTransaction);
const getOneWallet = handleCRUD.getOneById (userwalletetTransaction);
const deleteOneWallet = handleCRUD.deleteOneById (userwalletetTransaction);
 export default {createWallet,getAllWallet, UpdateOneWallet,getOneWallet,deleteOneWallet}