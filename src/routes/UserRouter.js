import { Router } from "express";
import UserController from "../controller/UserController";
const router =  Router();
router.post('/create',UserController.createUser);
router.get('/getAll',UserController.getAllUser);
router.get('/update',UserController.UpdateOneUser);
export default router;