import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export interface IHeader {
  authorization?: string | undefined;
}

const requireLoggedIn: RequestHandler = (req, res, next) => {
  const { authorization }: IHeader = req.headers;
  const jwt_secret: string | undefined = process.env.JWT_SECRET;
  if (authorization && jwt_secret) {
    const decoded = jwt.verify(authorization, jwt_secret);
    req.body["decoded"] = decoded;
    if (!decoded) {
      res
        .status(401)
        .json({ error: new Error("허가되지 않은 사용자입니다.").toString() });
    }
    next();
  } else {
    next();
  }
};
export default requireLoggedIn;
