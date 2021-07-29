import { Request, Response } from "express";
import HttpError from "../errors/HttpError";
import Category from "../models/Category";
import RecordType from "../models/RecordType";

interface IReadCategoryRequest extends Request {
  query: {
    type: RecordType;
  };
}

export const readByType = async (req: IReadCategoryRequest, res: Response) => {
  const { type } = req.query;
  if (!Object.values(RecordType).includes(type)) {
    throw new HttpError(400, "잘못된 타입입니다.");
  }

  const categories: Category[] = await Category.findAll({
    where: { type },
    attributes: ["id", "value", "type"],
  });

  res.status(200).json({ data: categories });
};
