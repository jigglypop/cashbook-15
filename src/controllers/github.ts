import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import fetch from "node-fetch";
import { Model } from "sequelize-typescript";
import HttpError from "../errors/HttpError";
import User from "../models/User";
import { generateToken } from "../util/generateToken";
import { serialize } from "../util/serialize";

const getToken = async (req: Request) => {
  const clientID = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  if (!clientID && !clientSecret) throw new HttpError(403, "Github 토큰 에러");
  const requestToken = req.query.code;
  const token_result = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    }
  );
  if (!token_result) throw new HttpError(403, "토큰 가져오기 실패");
  const token_data = await token_result.json();
  const token = await token_data.access_token;
  return token;
};

const getGithubUser = async (token: string) => {
  const result = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: "token " + token,
    },
  });
  if (!result) throw new HttpError(403, "깃허브 유저 정보 에러");
  const data = await result.json();
  return data;
};

export const github = async (req: any, res: Response) => {
  const token = await getToken(req);
  const data = await getGithubUser(token);
  req.session.data = {
    data,
  };
  res.redirect("/github");
};

export const githubtoken = async (req: any, res: Response) => {
  const data = req.session.data.data;
  if (!data) {
    throw new HttpError(403, "세션이 없습니다");
  }
  let user = await User.findOne({ where: { username: data.login } });
  const username = data.login;
  const password = data.id.toString();
  const img = data.avatar_url;
  if (!user) {
    const hashedPassword = await bcrypt.hash(password.toString(), 10);
    user = await User.create({
      username,
      email: "",
      hashedPassword,
      img,
    });
    if (!user) throw new HttpError(500, "유저 생성 불가");
  } else {
    const hashedPassword = user.getDataValue("hashedPassword");
    const valid = await bcrypt.compare(password, hashedPassword);
    if (!valid) throw new HttpError(400, "비밀번호가 잘못되었습니다");
  }
  // 로그인 발급
  const serialized = await serialize(user);
  const token = await generateToken(user);
  res.set("token", token);
  res.setHeader("Access-Control-Expose-Headers", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({ data: serialized });
  req.session.destroy(function (err: string) {
    if (err) {
      return;
    }
  });
};
