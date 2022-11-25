import teamModel from "../models/teamModel";
import handleCRUD from "../utils/handleCRUD";
import Participant from "../models/participants";
import Team from "../models/teamModel";
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
          const  teamMember = new Participant({
            TeamId:doc._id,
            UserId:req.userId
           });

           teamMember.save();



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
const getAllteam = async(req,res) => {
const getAll= await Participant.find({UserId:req.userId}).populate("TeamId","TeamName");
return res.status(200).send(getAll);
}
const UpdateOneteam = handleCRUD.updateOneById (teamModel);
const getOneteam = async(req,res)=>{
const  getOneById = await Participant.find({TeamId:req.params.id}).populate("UserId");
return res.status(200).send(getOneById)
};

//const getOneteam = handleCRUD.getOneById (teamModel);
const deleteOneteam = handleCRUD.deleteOneById (teamModel);
 export default {createteam,getAllteam, UpdateOneteam,UpdateOneteam,getOneteam,deleteOneteam }