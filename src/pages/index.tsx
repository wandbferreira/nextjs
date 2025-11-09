import TaskForm from '@/components/TaskForm/TaskForm';
import TaskList from '@/components/TaskList/TaskList';
import { fetchTasks, generateId, saveTasks } from '@/services/tasks.service';
import { DraftTask, Task } from '@/types/tasks';
import { useEffect, useState } from 'react';

export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [draft, setDraft] = useState<DraftTask | Task>({
    title: '',
    description: '',
  });

  useEffect(() => {
    setTasks(fetchTasks());
  }, []);

  function save(draft: DraftTask | Task) {
    const isNew = !draft.id;
    const updatedTasks: Task[] = isNew
      ? [{ ...draft, id: generateId(), completed: false }, ...tasks]
      : tasks.map((t) => (t.id === draft.id ? { ...t, ...draft } : t));

    updateTasks(updatedTasks);
    setDraft({ title: '', description: '' });
  }

  function toggle(taskId: number) {
    const updatedTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, completed: !t.completed } : t,
    );
    updateTasks(updatedTasks);
  }

  function remove(taskId: number) {
    const updatedTasks = tasks.filter((t) => t.id !== taskId);
    updateTasks(updatedTasks);
    setDraft({ title: '', description: '' });
  }

  function enableEditing(task: Task) {
    setDraft(task);
  }

  function updateTasks(updatedTasks: Task[]) {
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  }

  return (
    <main className="m-auto rounded bg-white text-gray-700 p-6">
      <h1 className="mb-3 text-2xl font-semibold">Gerenciador de Tarefas</h1>

      <TaskForm task={draft} onSave={save} />

      <p className="mt-6 text-gray-600">Total de {tasks.length} tarefas.</p>

      <TaskList
        tasks={tasks}
        onToggle={toggle}
        onRemove={remove}
        onEdit={enableEditing}
      />
    </main>
  );
}
