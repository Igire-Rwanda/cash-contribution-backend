import {Router} from "express";
import userRouter from "./UserRouter";
import teamRouter from "./teamRouter";
import teamtypeRouter from "./teamtypeRouter";
import walletRouter from "./walletRouter";

const router = Router();

router.use('/user',userRouter);
router.use('/team',teamRouter);
router.use('/type',teamtypeRouter);
router.use('/wallet',walletRouter);


export default router;