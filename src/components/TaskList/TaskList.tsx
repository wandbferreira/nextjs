function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <ul className="mt-6">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex gap-2 items-center justify-between mb-3"
        >
          <button
            className="bg-slate-200 hover:bg-slate-300 flex w-full rounded p-3"
            onClick={() => onToggle(task)}
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
            onClick={() => onDelete(task)}
            className="bg-slate-200 hover:bg-slate-300 rounded p-3"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
