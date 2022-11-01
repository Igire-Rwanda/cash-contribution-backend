import UserModel from "../models/userModel";
import handleCRUD from "../utils/handleCRUD";
 const createUser = handleCRUD.creatOne(UserModel);
const getAllUser = handleCRUD.getAll(UserModel);
const UpdateOneUser = handleCRUD.updateOneById (UserModel);
const getOneUser = handleCRUD.getOneById (UserModel);
const deleteOneUser = handleCRUD.deleteOneById (UserModel);
 export default {createUser,getAllUser, UpdateOneUser,getOneUser,deleteOneUser}