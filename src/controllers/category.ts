import { Request, Response } from "express";
import Category from "../models/Category";

export const readAll = async (req: Request, res: Response) => {
  const categories: Category[] = await Category.findAll();

  res.status(200).json({ data: categories });
};
