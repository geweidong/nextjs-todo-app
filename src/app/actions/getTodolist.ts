import prisma from "@/app/libs/prismadb";

export const getTodolist = async (id: string) => {
  try {
    const todolist  = await prisma.todo.findMany({
      where: {
        userId: id
      }
    })
    return todolist;
  } catch(err) {
    return [];
  }
}