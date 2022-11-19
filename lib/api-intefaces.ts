export interface Habit {
  id: string;
  habit: string;
  deletedAt: Date;
  completed: Date[];
}

export interface User {
  id: string;
  email: string;
  password: string;
}
