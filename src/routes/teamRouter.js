// 
import { Router } from "express";
import checkToken from "../middleWares/checkToken";
import teamController from "../controller/teamController";
const router =  Router();
router.post('/',checkToken,teamController.createteam);
router.get('/',teamController.getAllteam);
router.patch('/:id',teamController.UpdateOneteam);
router.delete('/:id',teamController.deleteOneteam);
router.get('/:id',teamController.getOneteam);
export default router;