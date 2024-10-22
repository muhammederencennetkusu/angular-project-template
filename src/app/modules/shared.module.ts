import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from '../components/blank/blank.component';
import { FormsModule } from '@angular/forms';
import { FormValidateDirective } from 'form-validate-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlankComponent,
    FormsModule,
    FormValidateDirective,
  ],
  exports: [
    CommonModule,
    BlankComponent,
    FormsModule,
    FormValidateDirective,
  ],
})
export class SharedModule {}
