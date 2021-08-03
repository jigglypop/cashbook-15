import { Column, Model, Table } from "sequelize-typescript";

export interface IUser extends Document {
  id: string;
  username: string;
  email: string;
  hashedPassword: string;
  img: string;
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
  img: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
