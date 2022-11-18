import { Router } from "express";
import  UserController from "../controller/UserController";
import { checkUser } from "../middleWares/checkUserExist";
import { verifyUserToken } from "../middleWares/verifyToken";
const router =  Router();
//router.use(verifyUserToken)
router
.route("/")
.post(checkUser,UserController.createUser)
.get(UserController.getAllUser);

router
.route("/:id")
.put(UserController.UpdateOneUser)
.get(UserController.getOneUser)
.delete(UserController.deleteOneUser);
export default router;