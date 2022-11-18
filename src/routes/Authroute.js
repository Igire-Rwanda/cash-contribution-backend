const express = required('express')
const router = express.Router()
const createError = require('http-errors')
const User = require('../models/userModel')
const {authSchema}= require('../helpers/validation_schema')
router.post('/register', async(req,res,next) =>{
    try{
        //const{email,password}=req.body
        // if(!email|| !password) throw createError.BadRequest()
        const result = await authSchema.validateAsync(res.body)
        const  doesExist = await User.findOne({email: result.email})
        if (doesExist)
        throw createError.conflict(`${result.email} is already been registered` )
        const user= new User({result})
        const savedUser = await User.save()
        res.send(savedUser)

    }catch(error){
        if (error.isJoi === true) error.status = 422
        next(error)
    }
})
