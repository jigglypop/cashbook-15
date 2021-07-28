import express, { Router } from "express";
import { createPage } from "../util/createPage";

const templateRouter: Router = express.Router();

templateRouter.get("/", (_, res) => {
  res.send(createPage("메인"));
});
templateRouter.get("/calendar/:month", (_, res) => {
  res.send(createPage("캘린더"));
});
templateRouter.get("/statistic", (_, res) => {
  res.send(createPage("통계"));
});

export default templateRouter;
