import { Router } from "express";
const {User,validate} = require("../models/userModel")
import  UserController from "../controller/UserController";
import { checkUser, loginUser } from "../middleWares/checkUserExist";
import { verifyUserToken } from "../middleWares/verifyToken";

const router =  Router();

router.post("/login", loginUser);
router
.route("/")
.post(checkUser, UserController.createUser) 

router.post("/",async (req,res)=>{
    try{
        const {error}= validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        const user = await new User(req.body).save();

        res.send(user)
    }catch(error){
        res.send("An error occured"+error.message)
        console.log(error)
    }
})
 .get(UserController.getAllUser);


router
    .route("/")
    .post(checkUser, UserController.createUser)
    .get(UserController.getAllUser);

router
    .route("/:id")
    .put(UserController.UpdateOneUser)
    .get(UserController.getOneUser)
    .delete(UserController.deleteOneUser);

export default router;