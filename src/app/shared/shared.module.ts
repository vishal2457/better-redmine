import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './ui/button/button.component';
import { SelectComponent } from './ui/select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from './ui/icon/icon.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SelectComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ButtonComponent,
    SelectComponent,
    IconComponent
  ]
})
export class SharedModule { }
