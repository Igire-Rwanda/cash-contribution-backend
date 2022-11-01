
import {Router} from "express";
import userRouter from "./UserRouter";
import teamRouter from "./teamRouter";
import teamtypeRouter from "./teamtypeRouter";
import participant from "./participantRouter"

const router = Router();

router.use('/user',userRouter);
router.use('/team',teamRouter);
router.use('/type',teamtypeRouter);
router.use('/participant',participant);
export default router;