import teamModel from "../models/teamModel";
import handleCRUD from "../utils/handleCRUD";
import Participant from "../models/participants";

import user from '../models/userModel';
import { userIdFromToken } from '../utils/token';

const cron = require('node-cron');
const express = require('express')

const settings = {
    MINUTE:"* * * * * ",
    TWoMINUTES:"*/2 * * * *",
    Hour:"* */1 * * *",
    Month:"* * */1 * *",
    every:"0 8 */1 */1 1,6",
}
const api = express()


// const teamId = teamIdFromToken(req.header('x-auth-token'));
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


const matchingTeam = async (req, res) => {
    try {
      const teamId = teamIdFromToken(req.header('x-auth-token'));
      const team = await Team.findById(teamId);
      if (team) {
        const team = await team.find({
          $or: [ { 'TeamName.first': user.first },  ],
        });
        if (team.length) {
          const sortedTeam = team.sort((a, b) => (new Date(b.teamcreatedat)).getTime()
            - (new Date(a.teamcreatedat).getTime()));
          return response.successResponse(res, 200, 'team matching your data', sortedTeam);
        }
        return response.errorResponse(res, 404, 'team matches with your data are not available');
      }
      return response.errorResponse(res, 401, 'You are not a user');
    } catch (error) {
      return response.errorResponse(res, 500, error);
    }
  };


const findALLteam = async (req, res) => {
    try {
      const teams = await teamjoin.find();
      if (teams.length) {
        const sortedTeams = Teams.sort((a, b) => (new Date(b.teamcreatedat)).getTime()
          - (new Date(a.teamcreatedat).getTime()));
        return response.successResponse(res, 201, 'teams retrieved successfully', sortedTeams);
      }
      return response.errorResponse(res, 404, 'teams are not available');
    } catch (error) {
      return response.errorResponse(res, 500, error);
    }
  };


const UpdateOneteam = handleCRUD.updateOneById (teamModel);
const joinTeam = (req,res)=>{

   const  teamMember= new Participant({TeamId:req.params.id,UserId:req.userId});
   teamMember.save();
    
    return res.json({message:"you have joined  the team"});
       
}

const getOneteam = handleCRUD.getOneById(teamModel);

const deleteOneteam = handleCRUD.deleteOneById (teamModel);
 export default {createteam,getAllteam, UpdateOneteam,UpdateOneteam,getOneteam,deleteOneteam,joinTeam }