import express, { Router } from "express";
import { check } from "../../controllers/user/check";
import { login } from "../../controllers/user/login";
import { register } from "../../controllers/user/register";
import jwtMiddleware from "../../middleware/jwtMiddleware";

const userRouter: Router = express.Router();

userRouter.post("/auth/login", login);
userRouter.post("/auth/register", register);
userRouter.get("/auth/check", jwtMiddleware, check);

export default userRouter;