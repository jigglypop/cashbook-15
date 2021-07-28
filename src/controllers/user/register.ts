import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { Model } from "sequelize-typescript";
import User from "../../models/user";
import { generateToken } from "../../util/generateToken";
import { serialize } from "../../util/serialize";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;
    // 에러처리
    if (!username || !password || !email) {
      const table: any = {
        username: username,
        password: password,
        email: email,
      };
      const blanks = [];
      for (const blank of ["username", "password", "email"]) {
        if (!table[blank]) blanks.push(blank);
      }
      throw new Error(`${blanks.join(", ")}을 올바르게 입력해 주세요`);
    }
    // 에러처리 (이미 존재하는 계정)
    const nameExists = await User.findOne({ where: { username: username } });
    if (nameExists) throw new Error("같은 이름의 계정이 존재합니다.");
    // 에러처리 (이미 존재하는 이메일)
    const emailExists = await User.findOne({ where: { email: email } });
    if (emailExists) throw new Error("이미 가입된 이메일입니다.");
    // 패스워드 제네레이터
    const hashedPassword = await bcrypt.hash(password.toString(), 10);
    const user = await User.create<Model>({
      username: username,
      email: email,
      hashedPassword: hashedPassword,
    });
    const serialized = await serialize(user);
    const token = await generateToken(user);
    if (!token) throw new Error("토큰 생성 실패");
    res.set("token", token);
    res.status(200).json({ data: serialized });
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.toString().replace("Error: ", "") });
    }
  }
};
