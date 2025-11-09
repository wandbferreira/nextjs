export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export type DraftTask = Partial<Task> & {
  title: string;
  description: string;
};
