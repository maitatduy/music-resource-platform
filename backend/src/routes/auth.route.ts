import { Router } from "express";

import { registerController } from "~/controllers/auth.controller";

import { registerValidator } from "~/middlewares/auth.middleware";

import validate from "~/middlewares/validate.middleware";

const authRouter = Router();

authRouter.post("/register", registerValidator, validate, registerController);

export default authRouter;
