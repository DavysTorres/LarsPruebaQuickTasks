// src/app/in-memory-data.service.ts
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Task } from './models/task.model';
import { Project } from './models/project.model';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const projects: Project[] = [
      { id: 1, name: 'Proyecto 1' },
      { id: 2, name: 'Proyecto 2' }
    ];
    const tasks: Task[] = [
      { id: 1, name: 'Tarea 1', status: 'pendiente', projectId: 1 },
      { id: 2, name: 'Tarea 2', status: 'en progreso', projectId: 1 },
      { id: 3, name: 'Tarea 3', status: 'completada', projectId: 2 }
    ];
    return { projects, tasks };
  }
}
