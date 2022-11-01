import { Router } from "express";
import teamController from "../controller/teamController";
const router =  Router();
router.post('/',teamController.createteam);
router.get('/',teamController.getAllteam);
router.patch('/:id',teamController.UpdateOneteam);
router.delete('/:id',teamController.deleteOneteam);
router.get('/:id',teamController.getOneteam);
export default router;