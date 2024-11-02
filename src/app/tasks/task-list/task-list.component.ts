// src/app/task-list/task-list.component.ts
import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  searchQuery: string = '';

  filterTasks(): Task[] {
    return this.tasks.filter(task =>
      task.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  editTask(task: Task) {
    // Lógica para editar tarea
  }

  deleteTask(id: number) {
    // Lógica para eliminar tarea
  }
}
