import { User } from "@prisma/client";
import TodoList from '@/app/components/TodoList';
import Avator from '@/app/components/Avator';
import AddTodoForm from '@/app/components/AddTodoForm';
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { getTodolist } from "@/app/actions/getTodolist";
import Link from "next/link";

export default async function Page() {
  const user = await getCurrentUser();
  if (!user) {
    // next 重定向
    return (
      <div className="
        p-3
        flex
        justify-center
        items-center
      ">
        <div className="w-[600px] rounded-md ring-1 ring-slate-200 shadow-lg p-5">
          <div className="pb-2 border-b border-slate-200">
            <span>未登录，去</span>
            <Link href="/" className="text-blue-600 underline">
              登陆
            </Link>
          </div>
      </div>
    </div>
    )
  }
  const {
    name,
    image,
    id,
  } = user as User;
  const todoList = await getTodolist(id);

  return (
    <div className="
      p-3
      flex
      justify-center
      items-center
    ">
      <div className="w-[600px] rounded-md ring-1 ring-slate-200 shadow-lg p-5">
        <div className="pb-2 border-b border-slate-200">
          <Avator userName={name!} image={image!} />
        </div>
        <AddTodoForm />
        <div className="p-3 flex flex-col">
          <TodoList todoList={todoList} />
        </div>
      </div>
    </div>
  );
}