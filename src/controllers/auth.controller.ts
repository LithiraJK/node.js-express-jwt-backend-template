import bcrypt from "bcryptjs";
import { Role, User } from "../models/user.model";
import { Request, Response } from "express";
import { signAccessToken } from "../utils/jwt.util";
import dotenv from "dotenv";

export const createSuperAdmin = async () => {
  
  dotenv.config();
  const adminpw = process.env.SUPERADMIN_PASSWORD as string;
  const adminemail = process.env.SUPERADMIN_EMAIL;

  try {
    const existsSuperAdmin = await User.findOne({ roles: [Role.SUPERADMIN] });
    if (existsSuperAdmin) {
      return console.log("Super Admin Already Exists");
    }
    
    const hashedPassword = bcrypt.hashSync(adminpw, 10);

    await User.create({
      email: adminemail,
      firstName: "SUPER",
      lastName: "ADMIN",
      password: hashedPassword,
      roles: [Role.SUPERADMIN],
      isBlock: false,
      profileimg: "",
    });

    console.log("Super admin account created!");
  } catch (error) {
    console.log("Error creating super admin");
  }
};


export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName, password, profileimg } = req.body;

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({
        message: "User already exists with this email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: hashedPassword,
      roles: [Role.CUSTOMER],
      isBlock: false,
      profileimg: profileimg,
    });

    res.json({
      message: "User Registered Successfully",
      data: {
        id: newUser._id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        roles: newUser.roles,
        profileimg: newUser.profileimg,
      },
    });

    console.log(newUser);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};

export const registerAdmin = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName, password, profileimg } = req.body;

    const existsAdmin = await User.findOne({ email });

    const hashedPassword = bcrypt.hashSync(password, 10);

    if (existsAdmin) {
      return res.status(400).json({
        message: "Admin already exists !",
      });
    }

    const newAdmin = await User.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: hashedPassword,
      roles: [Role.ADMIN],
      isBlock: false,
      profileimg: profileimg,
    });

    res.status(201).json({
      message: "Admin Create Successfully !",
      data: {
        id: newAdmin._id,
        email: newAdmin.email,
        firstName: newAdmin.firstName,
        lastName: newAdmin.lastName,
        roles: newAdmin.roles,
        profileimg: newAdmin.profileimg,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existUser = await User.findOne({ email });

  if (!existUser) {
    return res.status(400).json({
      message: "Invalid credentials with email",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, existUser.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid credentials with password",
    });
  }

  const accessToken = signAccessToken(existUser);

  res.status(200).json({
    message: "User logged in successfully",
    data: {
      id: existUser._id,
      email: existUser.email,
      accessToken: accessToken,
      roles: existUser.roles,
    },
  });
};
