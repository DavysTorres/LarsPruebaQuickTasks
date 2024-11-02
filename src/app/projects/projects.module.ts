import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ ProjectFormComponent, ProjectListComponent],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule, RouterModule ],
  exports: [ProjectFormComponent, ProjectListComponent]
})
export class ProjectsModule { }
