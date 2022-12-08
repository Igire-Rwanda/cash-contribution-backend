import {Router} from "express";
import userRouter from "./UserRouter";
import teamRouter from "./teamRouter";
import teamtypeRouter from "./teamtypeRouter";
import walletRouter from "./walletRouter";
import passwordReset from "./passwordReset";
import users from "./users";

const router = Router();

 router.use("/api/users",users);
 router.use("api/password-reset",passwordReset)
router.use('/user',userRouter);
router.use('/team',teamRouter);
router.use('/type',teamtypeRouter);
router.use('/wallet',walletRouter);



export default router;