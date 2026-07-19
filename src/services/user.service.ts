import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user.entity";
import { CreateUserDto, LoginUserDto } from "../types/user.types";
import bcrypt from "bcryptjs";

const userRepository = AppDataSource.getRepository(User);

export class UserService {
  async findAll() {
    return userRepository.find({
      order: {
        createdAt: "DESC",
      },
    });
  }

  async findOne(id: number) {
    return userRepository.findOneBy({ id });
  }

  async findByEmail(email: string) {
    return userRepository.findOneBy({ email });
  }

  async create(data: CreateUserDto) {
    // Check if user already exists
    const existingUser = await this.findByEmail(data.email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = userRepository.create({
      ...data,
      password: hashedPassword,
    });

    return userRepository.save(user);
  }

  async login(data: LoginUserDto) {
    const user = await this.findByEmail(data.email);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    // Return user without password
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}

export const userService = new UserService();
