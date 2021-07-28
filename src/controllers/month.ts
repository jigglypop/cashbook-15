import { Request, Response } from "express";
import Month, { IMonth } from "../models/month";

export const getMonth = async (req: Request, res: Response) => {
  // 에러처리 (형식)
  try {
    const { decoded, id } = req.body;
    if (!id || id.length !== 6) {
      throw new Error("달의 형식이 맞지 않습니다.");
    }
    const monthId = Number(id.toString() + decoded.id.toString());
    let month: IMonth | null = await Month.findByPk(monthId);
    if (!month) {
      month = await Month.create({
        id: monthId,
        userId: decoded.id,
      });
    }
    if (!month) throw new Error("달 생성 오류");
    res.status(200).json({ data: month });
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.toString().replace("Error: ", "") });
    }
  }
};
