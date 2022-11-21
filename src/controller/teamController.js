import teamModel from "../models/teamModel";
import handleCRUD from "../utils/handleCRUD";

const cron = require('node-cron');


const settings = {
    MINUTE:"* * * * *"
}


export const createteam =  async(req,res,next)=> {
    
    
    try{
        const doc  = await teamModel.create(req.body);
        if(!doc){
            return res.status(400).json({message:"failed to register"});
        }

        cron.schedule(settings[req.body.settings], () => {
            console.log('running a task every minute');
        });

        return res.status(201).json({message:"sucessfully", data:doc});
    }
    catch (error){
        console.log(error)

    }
}
const getAllteam = handleCRUD.getAll(teamModel);
const UpdateOneteam = handleCRUD.updateOneById (teamModel);
const getOneteam = handleCRUD.getOneById (teamModel);
const deleteOneteam = handleCRUD.deleteOneById (teamModel);
 export default {createteam,getAllteam, UpdateOneteam,UpdateOneteam,getOneteam,deleteOneteam }