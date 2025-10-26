import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;
console.log(JWT_SECRET);

export interface AuthRequest extends Request { // extend Request to include user property
  user?: any;
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization; // get full Authorization header

  if (!authHeader) {
    return res.status(403).json({
      message: "Unauthorized : No token provided !",
    });
  }

  const token = authHeader.split(" ")[1]; // split token seperated by space -> Bearer_Token

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload; // attach user payload to request
    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({
      message: "Unauthorized : Invalid Token ",
    });
  }
};
