import contributionModel from "../models/teamModel";
import handleCRUD from "../utils/handleCRUD";
const createteam = handleCRUD.creatOne(contributionModel);
const getAllteam = handleCRUD.getAll(contibutiontModel);
const UpdateOneteam = handleCRUD.updateOneById (contibutionModel);
const getOneteam = handleCRUD.getOneById (contibutionModel);
const deleteOneteam = handleCRUD.deleteOneById (contibutionModel);
 export default {createteam,getAllteam, UpdateOneteam,UpdateOneteam,getOneteam,deleteOneteam }