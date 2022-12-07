import { Router } from "express";
import checkToken from "../middleWares/checkToken";
import teamController from "../controller/teamController";

const router =  Router();

router.post('/',teamController.createteam);
router.get('/',checkToken,teamController.getAllteam);
router.patch('/:id',teamController.UpdateOneteam);
router.delete('/:id',teamController.deleteOneteam);
router.get('/:id',teamController.getOneteam);
router.get('/join/:id',checkToken,teamController.joinTeam);
export default router;


