import { Task } from '@/types/tasks';
import { useEffect, useState } from 'react';

interface TaskFormProps {
  task: Partial<Task>;
  onSave: (task: Task) => void;
}

export default function TaskForm({ task, onSave }: TaskFormProps) {
  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState(task.description || '');

  useEffect(() => {
    setTitle(task.title || '');
    setDescription(task.description || '');
  }, [task]);

  function submit() {
    const savedTask: Task = {
      ...task,
      title,
      description,
    };
    onSave(savedTask);
    setTitle('');
    setDescription('');
  }

  return (
    <form
      id="task-form"
      className="p-4 bg-slate-200 rounded-md"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <div className="mb-4">
        <input
          placeholder="Título da tarefa"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full p-2 border rounded-md bg-white"
        />
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="mt-1 w-full p-2 border rounded-md bg-white"
        ></textarea>
      </div>

      <button className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        {task.id ? 'Salvar Tarefa' : 'Adicionar Tarefa'}
      </button>
    </form>
  );
}
