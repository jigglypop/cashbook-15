import * as dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import Category from "./Category";
import { CATEGORIES } from "./defaultData";
import Payment from "./Payment";
import Record from "./Record";
import User from "./user";
import YearCategory from "./YearCategory";

dotenv.config();
export const sequelize = new Sequelize({
  database: process.env.DB_NAME || "cashbook",
  dialect: "mysql",
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD,
  models: [User, Payment, Category, Record, YearCategory],
});

const init = () => {
  Category.sync().then(async () => {
    const categories = await Category.findAll();
    const values = categories.map((category) => category.value);
    const notInsertedData = CATEGORIES.filter(
      (category) => !values.includes(category.value)
    );
    notInsertedData.forEach((category) => Category.create(category));
  });
};

init();
