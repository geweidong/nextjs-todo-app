import prisma from "@/app/libs/prismadb";
import { User } from "@prisma/client";
import getSession from "./getSession";

// 获取当前user，并且缓存起来
let userObject: User;
export const getCurrentUser = async () => {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    if (userObject) {
      return userObject;
    }
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      }
    })
    userObject = user!;
    return userObject;
  } catch(err) {
    return null;
  }
}