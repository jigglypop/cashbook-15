import express, { Router } from "express";
import { createPage } from "../util/createPage";

const templateRouter: Router = express.Router();

templateRouter.get("/", (_, res) => {
  res.send(createPage("회원가입/로그인"));
});
templateRouter.get("/main/:month", (_, res) => {
  res.send(createPage("메인"));
});
templateRouter.get("/github", (_, res) => {
  res.send(createPage("깃허브 로그인"));
});
templateRouter.get("/calendar/:month", (_, res) => {
  res.send(createPage("캘린더"));
});
templateRouter.get("/statistic/:month", (_, res) => {
  res.send(createPage("통계"));
});

export default templateRouter;
