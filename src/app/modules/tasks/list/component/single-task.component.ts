import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'single-task',
  // template: ` <mat-expansion-panel
  //   (opened)="panelOpenState = true"
  //   (closed)="panelOpenState = false"
  // >
  //   <mat-expansion-panel-header>
  //     <mat-panel-title>
  //     <mat-checkbox (change)="handleChange($event)">
  //     {{ singleTask.title }}
  //     </mat-checkbox>
  //     </mat-panel-title>
  //     <mat-panel-description>
  //       <mat-chip-list class="example-chip">
  //         <mat-chip
  //         class="example-box"
  //         [color]="task.color"
  //         selected
  //         *ngFor="let task of vegetables"
  //         matTooltipPosition="top"
  //         >
  //           {{ task.name }}
  //         </mat-chip>
  //       </mat-chip-list>
  //     </mat-panel-description>
  //   </mat-expansion-panel-header>
  //   <p>{{ singleTask.desc }}</p>
  // </mat-expansion-panel>`,
  template: `
  <div class="d-flex justify-content-between">
    <div class="d-flex my-2">
    <mat-checkbox></mat-checkbox>
  <p style="margin-left: 10px">{{ singleTask.desc }}</p>
  </div>
  <small style="opacity: 0.3" class="align-self-end">Rogler</small>
</div>
<hr class="my-0" />
`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleTaskComponent implements OnInit {
  @Input() singleTask: { title: string; desc: string } = {
    title: '',
    desc: '',
  };

  panelOpenState = false;
  vegetables: any[] = [
    { name: 'in-progress', color: "primary", tooltip: "status" },
    { name: 'today', color: "accent", tooltip: "Mon 7 jun" },
    { name: 'rogler', color: "warn", tooltip: "project" }
  ];
  ngOnInit(): void {}

  handleChange(e:any) {
    console.log(e);

  }
}
