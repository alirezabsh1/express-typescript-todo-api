export type CreateTodoDto = {
  title: string;
  completed?: boolean;
};

export type UpdateTodoDto = {
  title?: string;
  completed?: boolean;
};