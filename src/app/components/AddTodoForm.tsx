"use client";
import axios from 'axios';
import { useCallback, useState } from 'react';
import Input from '@/app/components/input';
import Button from '@/app/components/Button';
import { useTodoList } from '@/app/hooks/useTodoList';
import { toast } from 'react-hot-toast';

export default function AddTodoForm() {
  const [value, setValue] = useState('');

  const {
    addTodolist,
  } = useTodoList();
  const addTodo = useCallback(() => {
    if (!value) {
      return toast.error('请输入内容');
    }
    axios.post('/api/todo', {
      title: value,
    }).then((todo) => {
      addTodolist(todo.data);
    }).catch((err) => {
      toast.error('出错了', err.message || '');
    })
  }, [addTodolist, value]);

  return (
    <div className="pt-3 flex items-center">
      <Input value={value} onChange={setValue} />
      <Button disabled={!value} onClick={addTodo}>add new</Button>
    </div>
  )
}