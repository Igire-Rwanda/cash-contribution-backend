import teamModel from "../models/teamModel";
import handleCRUD from "../utils/handleCRUD";
const createteam = handleCRUD.creatOne(teamModel);
const getAllteam = handleCRUD.getAll(teamModel);
const UpdateOneteam = handleCRUD.updateOneById (teamModel);
const getOneteam = handleCRUD.getOneById (teamModel);
const deleteOneteam = handleCRUD.deleteOneById (teamModel);
 export default {createteam,getAllteam, UpdateOneteam,UpdateOneteam,getOneteam,deleteOneteam }