import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { CurrentTaskComponent } from './list/component/current-task.component';
import { TodaysTaskComponent } from './list/component/todays-task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { SingleTaskComponent } from './list/component/single-task.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskDetailComponent } from './list/component/task-detail/task-detail.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    AnalyticsComponent,
    CurrentTaskComponent,
    TodaysTaskComponent,
    SingleTaskComponent,
    TaskDetailComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatCardModule,
    SharedModule,
    DragDropModule,
    MatExpansionModule,
    MatChipsModule,
    MatCheckboxModule,
    MatListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class TasksModule {}
