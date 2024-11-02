export interface Task {
  id: number;
  nombre: string;
  estado: 'pendiente' | 'en progreso' | 'completada';
  proyectoId: number;
}
