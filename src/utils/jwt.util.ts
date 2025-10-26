import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { IUser } from "../models/user.model.js"


dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET as string

export const signAccessToken = (user : IUser) => {
    return jwt.sign({ sub: user._id as string , roles: user.roles ,email : user.email , firstName : user.firstName , lastName : user.lastName }, JWT_SECRET, { expiresIn: "1D" });
}

export default signAccessToken