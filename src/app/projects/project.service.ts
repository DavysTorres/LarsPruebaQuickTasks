
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];
  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);
  projects$ = this.projectsSubject.asObservable();

  addProject(project: Project) {
    project.id = this.projects.length + 1;
    this.projects.push(project);
    this.projectsSubject.next(this.projects);
  }

  editProject(updatedProject: Project) {
    const index = this.projects.findIndex(p => p.id === updatedProject.id);
    if (index > -1) {
      this.projects[index] = updatedProject;
      this.projectsSubject.next(this.projects);
    }
  }

  deleteProject(id: number) {
    this.projects = this.projects.filter(p => p.id !== id);
    this.projectsSubject.next(this.projects);
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}
