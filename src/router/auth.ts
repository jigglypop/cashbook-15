import express, { Router } from "express";
import { check, login, register } from "../controllers/auth";
import jwtMiddleware from "../middleware/jwtMiddleware";
import wrapAsync from "../util/wrapAsync";

const userRouter: Router = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", wrapAsync(register));
userRouter.get("/check", jwtMiddleware, check);

export default userRouter;
