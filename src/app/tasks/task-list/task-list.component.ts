import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../../models/task.model';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  searchTerm: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  filterTasks(): Task[] {
    return this.tasks.filter(task => task.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
