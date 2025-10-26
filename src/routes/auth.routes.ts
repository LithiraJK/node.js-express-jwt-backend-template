import { Router } from "express";
import { loginUser, registerAdmin, registerUser } from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { requireRole } from "../middlewares/role.middleware.js";
import { Role } from "../models/user.model.js";


const router = Router();

router.post("/register" , registerUser)

router.post("/login", loginUser)

router.post("/register/admin" , authenticate, requireRole([Role.SUPERADMIN]), registerAdmin)


export default router;