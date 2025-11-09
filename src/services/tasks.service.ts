import { Task } from '@/pages';

const STORAGE_KEY = 'tasks';

export function fetchTasks(): Task[] {
  const tasks = localStorage.getItem(STORAGE_KEY);
  return tasks ? JSON.parse(tasks) : [];
}

export function saveTasks(tasks: Task[]): void {
  if (Array.isArray(tasks)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
}
