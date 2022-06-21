import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="row">
      <div class="col-md-8">
        <mat-card>
          <mat-card-title>Rogler summary issues</mat-card-title>
          <mat-card-content>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </mat-card-content>
          <mat-card-actions>
            <app-select
              [items]="status"
              label="Status"
              bindName="key"
              bindValue="key"
            ></app-select>
          </mat-card-actions>
        </mat-card>
      </div>
      <div class="col-md-4">
        <mat-card>
          <mat-card-title>Actions</mat-card-title>
          <mat-card-content class="mat-typography">
            <div class="d-flex justify-content-between">
              <p class="text-danger">Critical tasks</p>
              <h2 class="text-danger">2</h2>
            </div>
            <div class="d-flex justify-content-between">
              <p class="text-info">Todays tasks</p>
              <h2 class="text-info">2</h2>
            </div>
            <div class="d-flex justify-content-between">
              <p class="text-success">Total tasks</p>
              <h2 class="text-success">2</h2>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
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
