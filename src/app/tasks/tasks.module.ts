import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TaskFormComponent, TaskListComponent],
  imports: [CommonModule, TasksRoutingModule, FormsModule, RouterModule],
  exports: [TaskFormComponent, TaskListComponent]
})
export class TasksModule { }
