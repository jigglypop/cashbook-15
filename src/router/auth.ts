import express, { Router } from "express";
import { check, login, register } from "../controllers/auth";
import jwtMiddleware from "../middleware/jwtMiddleware";

const userRouter: Router = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/check", jwtMiddleware, check);

export default userRouter;
