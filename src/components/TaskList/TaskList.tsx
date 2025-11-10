import { Task } from '@/types/tasks';

interface TaskListProps {
  tasks: Task[];
  onToggle: (taskId: number) => void;
  onRemove: (taskId: number) => void;
  onEdit: (task: Task) => void;
}

export default function TaskList({
  tasks,
  onToggle,
  onRemove,
  onEdit,
}: TaskListProps) {
  console.log('this is tasklist');

  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex gap-2 items-center justify-between mb-3"
        >
          <button
            className="bg-slate-200 hover:bg-slate-300 flex w-full rounded p-3"
            onClick={() => onToggle(task.id)}
          >
            <span className="w-full">{task.title}</span>
            <span>{task.completed ? '✅' : '⬜'}</span>
          </button>

          <button
            onClick={() => onEdit(task)}
            aria-label="Editar tarefa"
            className="bg-slate-200 hover:bg-slate-300 rounded p-3"
          >
            ✏️
          </button>

          <button
            aria-label="Excluir tarefa"
            onClick={() => onRemove(task.id)}
            className="bg-slate-200 hover:bg-slate-300 rounded p-3"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}
