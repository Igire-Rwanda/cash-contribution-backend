import { Router } from "express";
import checkToken from "../middleWares/checkToken";
import teamController from "../controller/teamController";

const router =  Router();

router.post('/',teamController.createteam);
router.get('/',teamController.getAllteam);
router.patch('/:id',teamController.UpdateOneteam);
router.delete('/:id',teamController.deleteOneteam);
router.get('/:id',teamController.getOneteam);
// router.get('/join/:id',teamController.getOneteam);
router.get('/join/:teamId',function(req, res){
    res.send('you requested to see a team with the id of ' + req.params.teamId)
});
export default router;

