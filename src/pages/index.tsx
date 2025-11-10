import TaskForm from '@/components/TaskForm/TaskForm';
import TaskList from '@/components/TaskList/TaskList';
import { fetchTasks, generateId, saveTasks } from '@/services/tasks.service';
import { DraftTask, Task } from '@/types/tasks';
import { useCallback, useEffect, useState } from 'react';

export default function TaskPage() {
  console.log('this is task page');

  const [tasks, setTasks] = useState<Task[]>([]);
  const [draft, setDraft] = useState<DraftTask | Task>({
    title: '',
    description: '',
  });

  useEffect(() => {
    setTasks(fetchTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const save = useCallback((draft: DraftTask | Task) => {
    setTasks((prev) => {
      const isNew = !draft.id;
      const updatedTasks: Task[] = isNew
        ? [{ ...draft, id: generateId(), completed: false }, ...prev]
        : prev.map((t) => (t.id === draft.id ? { ...t, ...draft } : t));

      saveTasks(updatedTasks);
      return updatedTasks;
    });
  }, []);

  function toggle(taskId: number) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t,
      ),
    );
  }

  function remove(taskId: number) {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));

    if (taskId === draft.id) {
      setDraft({ title: '', description: '' });
    }
  }

  function enableEditing(task: Task) {
    setDraft(task);
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
