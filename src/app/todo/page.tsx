import { User } from "@prisma/client";
import TodoList from '@/app/components/TodoList';
import Avator from '@/app/components/Avator';
import AddTodoForm from '@/app/components/AddTodoForm';
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { getTodolist } from "@/app/actions/getTodolist";

export default async function Page() {
  const user = await getCurrentUser();
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