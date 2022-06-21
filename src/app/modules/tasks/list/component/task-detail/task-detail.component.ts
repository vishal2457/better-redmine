import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskDetailInterface } from '../types';

@Component({
  selector: 'detail-dialog',
  templateUrl: './task-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [`../todays-task.component.scss`],
})
export class TaskDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: TaskDetailInterface) {}
  projects: any[] = [
    { key: 'Rogler' },
    { key: 'Zano' }
  ];

  priority: any[] = [
    { key: 'High' },
    { key: 'Low' }
  ];
}
