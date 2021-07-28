import { Request, Response } from "express";
import User from "../../models/user";

export const check = async (req: Request, res: Response) => {
  try {
    const { decoded } = await req.body;
    if (!decoded) throw new Error("허가되지 않은 사용자입니다.");
    const user = await User.findByPk(decoded.id);
    if (!user) throw new Error("같은 이름의 계정이 존재하지 않습니다.");
    res.status(200).json({ data: user });
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.toString().replace("Error: ", "") });
    }
  }
};
