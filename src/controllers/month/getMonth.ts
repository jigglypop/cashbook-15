import { Request, Response } from "express";
import { Model } from "sequelize-typescript";
import Month from "../../models/month";

export const getMonth = async (req: Request, res: Response) => {
  // 에러처리 (형식)
  try {
    const { decoded, value } = req.body;
    if (!value || value.length !== 6)
      throw new Error("달의 형식이 맞지 않습니다.");
    const monthId = Number(value.toString() + decoded.id.toString());
    const month = await Month.findByPk(monthId);
    if (!month) {
      await Month.create<Model>({
        id: monthId,
        value: monthId,
        userId: decoded.id,
      });
    }
    const _month = await Month.findByPk(monthId);
    if (!_month) throw new Error("달 생성 오류");
    res.status(200).json({ data: _month });
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.toString().replace("Error: ", "") });
    }
  }
};
