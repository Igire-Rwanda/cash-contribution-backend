import participantModel from "../models/teamModel";
import handleCRUD from "../utils/handleCRUD";
//import participant from "../models/participants";
const createteam = handleCRUD.creatOne(participantModel);
const getAllteam = handleCRUD.getAll(participantModel);

const UpdateOneteam = handleCRUD.updateOneById (participantModel);
const getOneteam = handleCRUD.getOneById (participantModel);
const deleteOneteam = handleCRUD.deleteOneById (participantModel);
 export default {createteam,getAllteam, UpdateOneteam,UpdateOneteam,getOneteam,deleteOneteam }