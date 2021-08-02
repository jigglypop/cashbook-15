import express, { Router } from "express";
import { readByType } from "../controllers/category";
import wrapAsync from "../util/wrapAsync";

const categoryRouter: Router = express.Router();

categoryRouter.get("/", wrapAsync(readByType));

export default categoryRouter;
