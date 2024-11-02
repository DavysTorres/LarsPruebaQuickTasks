export interface Task {
  id: number;
  projectId: number;
  title: string;
  description: string;
  dueDate: Date;
  statu?:string;
  completed: boolean;
}
