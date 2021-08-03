import { Column, Model, Table } from "sequelize-typescript";

export interface IUser {
  id?: string;
  username: string;
  email: string;
  hashedPassword: string;
  img: string;
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
}
