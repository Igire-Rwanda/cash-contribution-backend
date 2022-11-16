import { Router } from "express";
import walletController from "../controller/walletController";
const router =  Router();
router.post('/',walletController.createWallet);
router.get('/',walletController.getAllWallet);
router.patch('/:id',walletController.UpdateOneWallet);
router.delete('/:id',walletController.deleteOneWallet);
router.get('/:id',walletController.getOneWallet);
export default router;