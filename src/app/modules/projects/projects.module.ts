import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';



@NgModule({
  declarations: [
    ProjectDetailComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
