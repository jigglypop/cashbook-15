import { Request, Response } from "express";
import YearCategory from "../models/YearCategory";

export const readYearCategory = async (req: Request, res: Response) => {
  const { yearCategoryId } = req.params;
  if (!yearCategoryId) throw new Error("카테고리 아이디가 없습니다");
  const yearCategory = await YearCategory.findByPk(Number(yearCategoryId));
  res.status(200).json({ data: yearCategory });
};
