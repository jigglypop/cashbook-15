import express, { Router } from "express";
import { readAll } from "../controllers/category";
import wrapAsync from "../utils/wrapAsync";

const categoryRouter: Router = express.Router();

categoryRouter.get("/", wrapAsync(readAll));

export default categoryRouter;
