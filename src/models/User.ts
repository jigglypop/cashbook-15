import { AllowNull, Column, Model, Table, Unique } from "sequelize-typescript";

export interface IUser {
  id?: string;
  username: string;
  email: string;
  hashedPassword: string;
  img?: string;
}

@Table
export default class User extends Model<IUser> {
  @AllowNull(false)
  @Unique
  @Column
  username: string;

  @AllowNull(false)
  @Unique
  @Column
  email: string;

  @Column
  hashedPassword: string;

  @AllowNull
  @Column
  img: string;
}
