import TaskForm from '@/components/TaskForm/TaskForm';
import TaskList from '@/components/TaskList/TaskList';
import { fetchTasks, saveTasks } from '@/services/tasks.service';
import { Task } from '@/types/tasks';
import { useEffect, useState } from 'react';

export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>({
    title: '',
    description: '',
  });

  useEffect(() => {
    setTasks(fetchTasks());
  }, []);

  function save(task: Task) {
    let newTasks: Task[] = [...tasks];
    if (task.id) {
      newTasks = tasks.map((t) => (t.id === task.id ? { ...t, ...task } : t));
    } else {
      newTasks.unshift({ ...task, id: String(Date.now()), completed: false });
    }

    saveTasks(newTasks);
    setTasks(newTasks);
    setTask({
      title: '',
      description: '',
    });
  }

  function handleToggle(task: Task) {
    task.completed = !task.completed;
    save(task);
  }

  function handleDelete(task: Task) {
    const newTasks = tasks.filter((t) => t.id !== task.id);
    saveTasks(newTasks);
    setTasks(newTasks);
  }

  function handleEdit(task: Task) {
    setTask({ ...task });
  }

  return (
    <main className="m-auto rounded bg-white text-gray-700 p-6">
      <h1 className="mb-3 text-2xl font-semibold">Gerenciador de Tarefas</h1>
      <TaskForm task={task} onSave={save} />
      <p className="mt-6 text-gray-600">Total de {tasks.length} tarefas.</p>

      <TaskList
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </main>
  );
}
