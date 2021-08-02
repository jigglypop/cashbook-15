import type { NextFunction, Request, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";
import HttpError from "../errors/HttpError";

export interface IAuthRequest extends Request {
  body: {
    userId: number;
  };
}

const jwtMiddleware: RequestHandler = (
  req: IAuthRequest,
  _,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  const jwt_secret: string | undefined = process.env.JWT_SECRET;
  if (!authorization || !jwt_secret) {
    throw new HttpError(401, "사용자 인증에 실패했습니다.");
  }
  const user = jwt.verify(authorization, jwt_secret) as User;
  req.body.userId = user.id;
  next();
};
export default jwtMiddleware;
