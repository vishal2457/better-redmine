import { ChangeDetectionStrategy, Component, Input } from "@angular/core";


@Component({
  selector: "br-icon",
  template: `
        <mat-icon [color]="color" [class]="size">{{icon}}</mat-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class IconComponent {

  @Input() icon: string = ''
  @Input() color: 'primary' | 'secondary' | 'accent' = 'accent'
  @Input() size: 'md'|'lg'|'xl'|'sm' = 'md'

  private _sizes = {
    md: '10px',
    lg: ''
  }

  get _size() {
    return
  }

}
