import { Router } from "express";

import { loginController, registerController } from "~/controllers/auth.controller";

import { loginValidator, registerValidator } from "~/middlewares/auth.middleware";

import validate from "~/middlewares/validate.middleware";

const authRouter = Router();

authRouter.post("/register", registerValidator, validate, registerController);

authRouter.post("/login", loginValidator, validate, loginController);

export default authRouter;
