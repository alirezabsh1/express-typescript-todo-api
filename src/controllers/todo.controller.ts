import { Request, Response } from "express";
import { todoService } from "../services/todo.service";

export class TodoController {
  async getTodos(req: Request, res: Response) {
    const todos = await todoService.findAll();

    res.json({
      data: todos,
    });
  }

  async getTodoById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const todo = await todoService.findOne(id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.json({
      data: todo,
    });
  }

  async createTodo(req: Request, res: Response) {
    const { title, completed } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const todo = await todoService.create({
      title,
      completed,
    });

    res.status(201).json({
      data: todo,
    });
  }

  async updateTodo(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { title, completed } = req.body;

    const todo = await todoService.update(id, {
      title,
      completed,
    });

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.json({
      data: todo,
    });
  }

  async deleteTodo(req: Request, res: Response) {
    const id = Number(req.params.id);

    const todo = await todoService.remove(id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.json({
      message: "Todo deleted successfully",
      data: todo,
    });
  }
}

export const todoController = new TodoController();