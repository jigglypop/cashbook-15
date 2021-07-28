import { Column, HasMany, Model, Table } from "sequelize-typescript";
import Month from "./month";

export interface IUser extends Document {
  id: string;
  username: string;
  email: string;
  hashedPassword: string;
  createdAt: Date;
  updatedAt: Date;
}

@Table
export default class User extends Model<IUser> {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  hashedPassword: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @HasMany(() => Month)
  months: Month[];
}
