import { Router } from "express";
import { initiatePayment } from "../controller/paymentsController";
const router =  Router();
router.post('/',initiatePayment);

export default router;