import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@Component({
  selector: 'single-task',
  template: `
    <div class="d-flex justify-content-between">
      <div class="d-flex my-2">
        <mat-checkbox></mat-checkbox>
        <p class="task-title" (click)="openDetail()">{{ singleTask.title }}</p>
      </div>
      <small class="align-self-end project-name">Rogler</small>
    </div>
    <hr class="my-0" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
  .task-title {
    margin-left: 10px
  }

  .project-name {
    opacity: 0.3
  }
  `]
})
export class SingleTaskComponent implements OnInit {

  constructor(private _dialog: MatDialog) {}

  @Input() singleTask: { title: string; desc: string } = {
    title: '',
    desc: '',
  };

  panelOpenState = false;
  vegetables: any[] = [
    { name: 'in-progress', color: 'primary', tooltip: 'status' },
    { name: 'today', color: 'accent', tooltip: 'Mon 7 jun' },
    { name: 'rogler', color: 'warn', tooltip: 'project' },
  ];
  ngOnInit(): void {}

  handleChange(e: any) {
    console.log(e);
  }


  openDetail() {
    this._dialog.open(TaskDetailComponent, {
      data: this.singleTask,
      panelClass: 'custom-dialog-container',
      height: "50%",
      width: "60%"
    })
  }

}
