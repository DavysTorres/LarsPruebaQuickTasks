import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../../models/project.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProyectos().subscribe(projects => {
      this.projects = projects;
    });
  }

  deleteProject(projectId: number) {
    this.projectService.deleteProject(projectId).subscribe(() => {
      this.loadProjects();
    });
  }
}
