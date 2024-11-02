// src/app/project-list/project-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../project.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./project-list.component.html' ,
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.projects$.subscribe((projects) => this.projects = projects);
  }

  viewProject(id: number) {

  }
}
