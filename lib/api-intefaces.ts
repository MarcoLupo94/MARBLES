export interface Habit {
  id: string;
  habit: string;
  deletedAt: Date;
  completed: Date[];
}

export interface User {
  email: String;
  id: string;
  habits: Habit[];
}
