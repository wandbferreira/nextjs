import { DraftTask, Task } from '@/types/tasks';
import { useEffect, useState } from 'react';

interface TaskFormProps {
  task: DraftTask;
  onSave: (draft: DraftTask) => void;
}

export default function TaskForm({ task, onSave }: TaskFormProps) {
  const [draft, setDraft] = useState<DraftTask | Task>({ ...task });

  useEffect(() => {
    setDraft({ ...task });
  }, [task]);

  function submit() {
    onSave(draft);
  }

  return (
    <form
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
          value={draft.title}
          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          className="mt-1 w-full p-2 border rounded-md bg-white"
        />
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Descrição"
          value={draft.description}
          onChange={(e) => setDraft({ ...draft, description: e.target.value })}
          rows={3}
          className="mt-1 w-full p-2 border rounded-md bg-white"
        />
      </div>

      <button className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        {'id' in task ? 'Salvar Tarefa' : 'Adicionar Tarefa'}
      </button>
    </form>
  );
}
