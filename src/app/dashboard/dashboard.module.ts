import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import { MathComponent } from './components/math.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      DashboardComponent,
      MathComponent,
      FileSelectDirective,
      FileDropDirective

  ]
})
export class DashboardModule { }
