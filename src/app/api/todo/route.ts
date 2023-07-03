import prisma from '@/app/libs/prismadb';
import { NextResponse } from "next/server";
import { getCurrentUser } from '@/app/actions/getCurrentUser';

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
  console.log('title', title)
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