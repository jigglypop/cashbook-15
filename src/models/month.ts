import {
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique
} from "sequelize-typescript";
import User from "./user";

export interface IMonth {
  id: number;
  userId: number;
}

@Table
export default class Month extends Model<IMonth> {
  @PrimaryKey
  @Unique
  @Column
  id: number;

  @ForeignKey(() => User)
  @PrimaryKey
  @Column
  userId: number;
}
