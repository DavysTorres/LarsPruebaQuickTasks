
import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../tasks/task.service';
import { Task } from '../models/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() onSave = new EventEmitter<Task>();
  task: Task = { id: 0, projectId: 0, title: '', description: '', dueDate: new Date(), completed: false };

  submitForm() {
    this.onSave.emit(this.task);
  }
}
