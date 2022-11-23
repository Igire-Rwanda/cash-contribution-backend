import teamModel from "../models/teamModel";
import handleCRUD from "../utils/handleCRUD";
import jwt from 'jsonwebtoken';

const cron = require('node-cron');


const settings = {
    MINUTE:"* * * * * ",
    TWoMINUTES:"*/2 * * * *",
    Hour:"* */1 * * *",
    Month:"* * */1 * *",
    every:"0 8 */1 */1 1,6",
}

export const createteam =  async(req,res,next)=> {


    

    
    try{






        req.body.TeamAdmin=req.userId;
        const doc  = await teamModel.create(req.body);
        if(!doc){
            return res.status(400).json({message:"failed to register"});
        }

        cron.schedule(settings[req.body.settings], () => {
            console.log('contibute every minute');
        });

        return res.status(201).json({message:"sucessfully", data:doc});
    }
    catch (error){
        console.log(error)
        return res.status(500).json({message:error.message});

    }
}
const getAllteam = handleCRUD.getAll(teamModel);
const UpdateOneteam = handleCRUD.updateOneById (teamModel);
const getOneteam = handleCRUD.getOneById (teamModel);
const deleteOneteam = handleCRUD.deleteOneById (teamModel);
 export default {createteam,getAllteam, UpdateOneteam,UpdateOneteam,getOneteam,deleteOneteam }