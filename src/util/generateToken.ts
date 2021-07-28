import jwt from "jsonwebtoken";

// 토큰 발급
export const generateToken = (user: any) => {
  const jwt_secret: string | undefined = process.env.JWT_SECRET;
  if (!jwt_secret) return null;
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    jwt_secret,
    {
      expiresIn: process.env.JWT_EXPIRED,
    }
  );
  return token;
};
