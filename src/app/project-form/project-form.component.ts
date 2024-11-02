import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from '../models/project.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {
  @Output() onSave = new EventEmitter<Project>();
  project: Project = { id: 0, name: '', description: '' };

  submitForm() {
    this.onSave.emit(this.project);
  }
}
