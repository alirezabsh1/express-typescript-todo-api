import { Request, Response } from "express";
import { userService } from "../services/user.service";

export class UserController {
  async signUp(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // Password strength validation (at least 6 characters)
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
    }

    try {
      const user = await userService.create({ email, password });

      res.status(201).json({
        message: "User registered successfully",
        data: {
          id: user.id,
          email: user.email,
          createdAt: user.createdAt,
        },
      });
    } catch (error: any) {
      if (error.message === "User with this email already exists") {
        return res.status(409).json({
          message: error.message,
        });
      }
      throw error;
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    try {
      const user = await userService.login({ email, password });

      res.json({
        message: "Login successful",
        data: user,
      });
    } catch (error: any) {
      if (
        error.message === "Invalid email or password" ||
        error.message === "User not found"
      ) {
        return res.status(401).json({
          message: error.message,
        });
      }
      throw error;
    }
  }
}

export const userController = new UserController();
