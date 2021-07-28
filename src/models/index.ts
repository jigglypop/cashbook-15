import * as dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import Month from "./month";
import { Payment } from "./Payment";
import User from "./user";

dotenv.config();
export const sequelize = new Sequelize({
  database: process.env.DB_NAME || "cashbook",
  dialect: "mysql",
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD,
  models: [User, Payment, Month],
});

sequelize.addModels([Payment]);
