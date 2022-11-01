import teamtypeModel from "../models/TeamtypeModel";
import handleCRUD from "../utils/handleCRUD";
const createteamtype = handleCRUD.creatOne(teamtypeModel);
const getAllteamtype = handleCRUD.getAll(teamtypeModel);
const UpdateOneteamtype = handleCRUD.updateOneById (teamtypeModel);
const getOneteamtype = handleCRUD.getOneById (teamtypeModel);
const deleteOneteamtype = handleCRUD.deleteOneById (teamtypeModel);
 export default {createteamtype,getAllteamtype, UpdateOneteamtype,UpdateOneteamtype,getOneteamtype,deleteOneteamtype }