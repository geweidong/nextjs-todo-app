import prisma from '@/app/libs/prismadb';
import { NextResponse } from "next/server";
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { getTodolist } from '@/app/actions/getTodolist';

export const POST = async (request: Request) => {
  const user = await getCurrentUser();
  const body = await request.json();
  if (!user) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  if (!body?.title) {
    return new NextResponse('Title is required', { status: 400 });
  }
  const { id } = user;
  // add new todo
  const { title } = body;
  const todo = await prisma.todo.create({
    data: {
      title,
      user: {
        connect: {
          id,
        },
      },
    },
  });
  return NextResponse.json(todo);
}

export const GET = async (request: Request) => {
  const user = await getCurrentUser();
  if (!user) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const { id } = user;
  const todolist = await getTodolist(id);
  return NextResponse.json(todolist);
}
