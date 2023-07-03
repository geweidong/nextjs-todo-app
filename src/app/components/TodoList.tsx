"use client";
import { Todo } from '@prisma/client';
import { useTodoList } from '@/app/hooks/useTodoList';
import { useEffect } from 'react';

export default function TodoList({
  todoList
}: {
  todoList: Todo[]
}) {
  const {
    todolist,
    setTodolist,
  } = useTodoList();

  useEffect(() => {
    setTodolist(todoList);
  }, [setTodolist, todoList])

  console.log(todoList, todolist, 'todolist')
  return (
    <div>
      todolist
    </div>
  )
}