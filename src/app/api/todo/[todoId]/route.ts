import prisma from '@/app/libs/prismadb';
import { NextResponse } from "next/server";
import { getCurrentUser } from '@/app/actions/getCurrentUser';

interface IParams {
  todoId: string;
}

export const POST = async (request: Request, { params }: { params: IParams }) => {
  try {
    const user = await getCurrentUser();
    const body = await request.json();

    const { completed } = body;

    const { todoId } = params;
    if (!user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    if (!todoId) {
      return new NextResponse('todo.id is required', { status: 400 });
    }

    // 更新todo
    const todo = await prisma.todo.update({ 
      where: { id: todoId },
      data: {
        done: completed,
      },
    });

    return NextResponse.json(todo);
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
