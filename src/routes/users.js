const{User,validate} = require("../models/userModel")
const express = require('express');
const { Router } = require("express");
const router = express.Router();
router.post("/",async(req,res)=>{
    try{
        const {error} = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        const user = await new User(req.body).save();
        res.send(user)

    }catch(error){
        res.send("An error occured");
        console.log(error)
    }
})
module.exports=router