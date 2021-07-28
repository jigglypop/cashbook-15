import * as dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import Month from "./month";
import Payment from "./Payment";
import User from "./user";
import Category from "./Category";
import MoneyRecord from "./MoneyRecord";

import { CATEGORIES } from "./defaultData";

dotenv.config();
export const sequelize = new Sequelize({
  database: process.env.DB_NAME || "cashbook",
  dialect: "mysql",
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD,
  models: [User, Payment, Month, Category, MoneyRecord],
});

const init = () => {
  Category.sync().then(async () => {
    const categories = await Category.findAll();
    const values = categories.map((category) => category.value);
    const notInsertedData = CATEGORIES.filter(
      (category) => !values.includes(category)
    );
    notInsertedData.forEach((value) => Category.create({ value }));
  });
};

init();
