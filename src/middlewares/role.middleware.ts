import { Response, NextFunction } from "express";
import { Role } from "../models/user.model.js";
import { AuthRequest } from "./auth.middleware.js";

export const requireRole = (roles: Role[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized User",
      });
    }

    const hasRequiredRole = roles.some((role) =>
      req.user.roles?.includes(role)
    );

    if (!hasRequiredRole) {
      return res.status(403).json({
        message: "Access Forbidden",
      });
    }

    next();
  };
};
