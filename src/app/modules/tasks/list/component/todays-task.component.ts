import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'todays-task',
  template: `<h4 class="mt-3">Today</h4>
    <div cdkDropList (cdkDropListDropped)="drop($event)">
      <mat-list role="list">
        <mat-list-item *ngFor="let task of tasks" cdkDrag>
          <single-task class="w-100" [singleTask]="task"></single-task>
        </mat-list-item>
      </mat-list>
    </div>`,
  styleUrls: ['./todays-task.component.scss'],
})
export class TodaysTaskComponent {
  tasks = [
    {
      title: 'This is the title of the task 1',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
      title: 'This is the title of the task 2',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
      title: 'This is the title of the task 3',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
