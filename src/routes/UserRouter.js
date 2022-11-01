import { Router } from "express";
import UserController from "../controller/UserController";
const router =  Router();
router.post('/',UserController.createUser);
router.get('/',UserController.getAllUser);
router.put('/:id',UserController.UpdateOneUser);
router.get('/:id',UserController.getOneUser);
router.delete('/:id',UserController.deleteOneUser);
export default router;