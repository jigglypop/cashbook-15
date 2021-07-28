import {
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique
} from "sequelize-typescript";
import User from "./user";

export interface IMonth extends Document {
  id: number;
  value: number;
}

@Table
export default class Month extends Model<Month> {
  @PrimaryKey
  @Unique
  @Column
  id: number;

  @Column
  value: number;

  @ForeignKey(() => User)
  @PrimaryKey
  @Column
  userId: number;
}
