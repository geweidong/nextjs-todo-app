import { create } from 'zustand'
import { Todo } from '@prisma/client';

interface TodoListState {
  todolist: Todo[];
  setTodolist: (todolist: Todo[]) => void;
  addTodolist: (todo: Todo) => void;
  removeTodolist: (id: string) => void;
  clearTodolist: () => void;
}

export const useTodoList = create<TodoListState>((set) => ({
  todolist: [],
  setTodolist: (todolist: Todo[]) => set({ todolist }),
  addTodolist: (todo: Todo) => set((state) => ({ todolist: [...state.todolist, todo] })),
  removeTodolist: (id: string) => set((state) => ({ todolist: state.todolist.filter((todo: Todo) => todo.id !== id) })),
  clearTodolist: () => set({ todolist: [] }),
}))
