import { Router } from "express";
import teamtypeController from "../controller/teamtypeController";
const router =  Router();
router.post('/',teamtypeController.createteamtype);
router.get('/',teamtypeController.getAllteamtype);
router.patch('/:id',teamtypeController.UpdateOneteamtype);
router.delete('/:id',teamtypeController.deleteOneteamtype);
router.get('/:id',teamtypeController.getOneteamtype);
export default router;