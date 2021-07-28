import { Request, Response } from "express";
import Month, { IMonth } from "../models/month";
import HttpError from "../errors/HttpError";

export const read = async (req: Request, res: Response) => {
  const { decoded, id } = req.body;

  if (!id || id.length !== 6) {
    throw new HttpError(400, "달의 형식이 맞지 않습니다.");
  }
  const monthId = Number(id.toString() + decoded.id.toString());
  let month: IMonth | null = await Month.findByPk(monthId);
  if (!month) {
    month = await Month.create({
      id: monthId,
      userId: decoded.id,
    });
  }
  if (!month) {
    throw new Error("달 생성 오류");
  }
  res.status(200).json({ data: month });
};
