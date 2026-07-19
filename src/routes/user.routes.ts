import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { asyncHandler } from "../middlewares/async.middleware";

const router = Router();

router.post("/signup", asyncHandler(userController.signUp));
router.post("/login", asyncHandler(userController.login));

export default router;
