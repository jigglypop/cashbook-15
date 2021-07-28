import { Request, Response } from "express";
import Category, { ICategory } from "../models/Category";

export const readAll = async (req: Request, res: Response) => {
  const categories: Category[] = await Category.findAll();
  const data: ICategory[] = categories.map((category) => ({
    id: category.id,
    value: category.value,
  }));

  res.status(200).json({ data });
};
