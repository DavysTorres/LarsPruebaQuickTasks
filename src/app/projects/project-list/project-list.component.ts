import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../../models/project.model';



@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe((projects) => (this.projects = projects));
  }

  deleteProject(id: number): void {
    this.projectService.deleteProject(id).subscribe(() => this.loadProjects());
  }
}