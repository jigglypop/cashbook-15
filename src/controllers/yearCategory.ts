import { Request, Response } from "express";
import HttpError from "../errors/HttpError";
import YearCategory from "../models/YearCategory";

export const readYearCategory = async (req: Request, res: Response) => {
  const { yearCategoryId } = req.params;
  if (!yearCategoryId) throw new HttpError(400, "카테고리 아이디가 없습니다");
  const yearCategory = await YearCategory.findByPk(Number(yearCategoryId));
  res.status(200).json({ data: yearCategory });
};
