import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import User from "../../models/user";
import { generateToken } from '../../util/generateToken';
import { serialize } from '../../util/serialize';

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body
        if (!username || !password) throw new Error('이름과 비밀번호를 정확히 입력해 주세요')
        const user = await User.findOne({ where: { username: username }})
        // 계정이 존재하는지
        if (!user) throw new Error('같은 이름의 계정이 존재하지 않습니다.')
        // 비밀번호가 일치하지 않음
        const hashedPassword = user.getDataValue('hashedPassword')
        const valid = await bcrypt.compare(password, hashedPassword)
        if (!valid) throw new Error('비밀번호가 잘못되었습니다')
        // 토큰 발급
        const serialized = await serialize(user)
        const token = await generateToken(user)
        if (!token) throw new Error("토큰 생성 실패");
        res.set('token', token);
        res.status(200).json({ data: serialized })
    } catch (e){
        if (e instanceof Error) {
            res.status(500).json({ error: e.toString().replace("Error: ", "") })
        }
    }
}