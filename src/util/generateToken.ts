import jwt from "jsonwebtoken";
import HttpError from "../errors/HttpError";

// 토큰 발급
export const generateToken = (user: any): string => {
  const jwt_secret: string | undefined = process.env.JWT_SECRET;
  if (!jwt_secret) {
    throw new HttpError(400, "토큰 생성 실패");
  }
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    jwt_secret,
    {
      expiresIn: process.env.JWT_EXPIRED,
    }
  );
};
