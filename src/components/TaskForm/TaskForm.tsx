import { DraftTask, Task } from '@/types/tasks';
import { memo, useEffect, useState } from 'react';

interface TaskFormProps {
  task: DraftTask;
  onSave: (draft: DraftTask) => void;
}

export default memo(function TaskForm({ task, onSave }: TaskFormProps) {
  const [draft, setDraft] = useState<DraftTask | Task>(task);

  useEffect(() => {
    setDraft(task);
  }, [task]);

  useEffect(() => {
    performance.mark('react-mounted');
    performance.measure('app-bootstrap', 'app-start', 'react-mounted');
    const m = performance.getEntriesByName('app-bootstrap').at(-1);
    console.log(`⏱️ App carregou em ${m?.duration.toFixed(2)}ms`);

    // Projeto levou em media 140ms para renderizar com tamanho de 395kb
    // 900ms com 4g (com gzip)
    // na aba de rede diz:
    // - que DOMContentLoad: 30ms
    // - Finish: 170
    // (LCP): 0.06 s
    // (CLS): 0.05 (depende da quantidade de tasks)

    // Nextjs rodou
    // 1x inicial
    // 1x por digitar (mas só o form)
    // 1x por toggle (talvez o form melhora com memo)
    // 1x por deletar o selecionado
    // 1x por deletar nao selecionado
    // 1,1x por editar
    // 1x por salvar sem mudanca
    // 1x por salvar com mudanca
    // 1x por salvar novo
  }, []);

  function submit() {
    onSave(draft);
    setDraft({ title: '', description: '' });
  }
  console.log('this is task form');

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
        {task.id ? 'Salvar Tarefa' : 'Adicionar Tarefa'}
      </button>
    </form>
  );
});
