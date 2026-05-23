import { AppDataSource } from "../config/data-source";
import { Todo } from "../entities/todo.entity";
import { CreateTodoDto, UpdateTodoDto } from "../types/todo.types";

const todoRepository = AppDataSource.getRepository(Todo);

export class TodoService {
  async findAll() {
    return todoRepository.find({
      order: {
        createdAt: "DESC",
      },
    });
  }

  async findOne(id: number) {
    return todoRepository.findOneBy({ id });
  }

 async create(data: CreateTodoDto) {
  const todo = todoRepository.create(data);
  return todoRepository.save(todo);
}

async update(id: number, data: UpdateTodoDto) {
  const todo = await todoRepository.findOneBy({ id });

  if (!todo) {
    return null;
  }

  todoRepository.merge(todo, data);

  return todoRepository.save(todo);
}

  async remove(id: number) {
    const todo = await todoRepository.findOneBy({ id });

    if (!todo) {
      return null;
    }

    await todoRepository.remove(todo);

    return todo;
  }
}

export const todoService = new TodoService();