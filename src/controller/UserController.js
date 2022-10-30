import UserModel from "../models/userModel";
import handleCRUD from "../utils/handleCRUD";
 const createUser = handleCRUD.creatOne(UserModel);
const getAllUser = handleCRUD.getAll(UserModel);
const UpdateOneUser = handleCRUD.updateOne(UserModel);
 export default {createUser,getAllUser, UpdateOneUser}