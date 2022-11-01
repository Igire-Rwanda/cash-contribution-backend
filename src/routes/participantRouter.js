import { Router } from "express";
import participantController from "../controller/participantController";
const router =  Router();
router.post('/',participantController.createteam);
router.get('/',participantController.getAllteam);
router.patch('/:id',participantController.UpdateOneteam);
router.delete('/:id',participantController.deleteOneteam);
router.get('/:id',participantController.getOneteam);
export default router;