import { Column, Model, Table } from "sequelize-typescript";

@Table
export default class User extends Model<User> {
  @Column
  name: string;

  @Column
  hashedPassword: string;
}
