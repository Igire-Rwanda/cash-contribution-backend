import { Router } from "express";
import UserController from "../controller/UserController";
import { checkUser, loginUser } from "../middleWares/checkUserExist";
import { verifyUserToken } from "../middleWares/verifyToken";
const route = Router();

route.post("/login", loginUser);
//router.use(verifyUserToken)
route
    .route("/")
    .post(checkUser, UserController.createUser)
    .get(UserController.getAllUser);

route
    .route("/:id")
    .put(UserController.UpdateOneUser)
    .get(UserController.getOneUser)
    .delete(UserController.deleteOneUser);

export default route;