
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from "./models/project.model";
import { Task } from "./models/task.model";


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects: Project[] = [
      { id: 1, nombre: 'Proyecto 1' },
      { id: 2, nombre: 'Proyecto 2' },
    ];
    const tasks: Task[] = [
      { id: 1, nombre: 'Tarea 1', estado: 'pendiente', proyectoId: 1 },
      { id: 2, nombre: 'Tarea 2', estado: 'en progreso', proyectoId: 1 },
      { id: 3, nombre: 'Tarea 3', estado: 'completada', proyectoId: 1 },
    ];
    return { projects, tasks };
  }
}
