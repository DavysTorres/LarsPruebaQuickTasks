export interface Task {
  id: number;
  name: string;
  status: 'pendiente' | 'en progreso' | 'completada';
  projectId: number;
}
