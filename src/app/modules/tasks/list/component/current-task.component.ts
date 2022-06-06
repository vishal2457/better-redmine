import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  template: `
  <h4>Current Task</h4>
  <mat-card>
    <mat-card-title>Rogler summary issues</mat-card-title>
    <mat-card-subtitle>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </mat-card-subtitle>
    <mat-card-actions>
      <app-select
        [items]="status"
        label="Status"
        bindName="key"
        bindValue="key"
      ></app-select>
    </mat-card-actions>
  </mat-card>`,
  selector: 'current-task',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentTaskComponent implements OnInit {
  status: any[] = [
    { key: 'Pending' },
    { key: 'In-Progress' },
    { key: 'Completed' },
    { key: 'Hold' },
  ];

  ngOnInit(): void {}
}
