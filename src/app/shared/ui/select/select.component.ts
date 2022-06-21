import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
  <mat-form-field appearance="outline">
  <mat-label>{{label}}</mat-label>
  <mat-select  name="food">
    <mat-option *ngFor="let item of items" [value]="bindValue">
      {{item[bindName]}}
    </mat-option>
  </mat-select>
</mat-form-field>
`,
changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {

  constructor() { }
  @Input() items: any[] = [];
  @Input() bindValue: string|number|null = null;
  @Input() bindName: string = '';
  @Input() label: string = ''



  ngOnInit(): void {

  }



}
