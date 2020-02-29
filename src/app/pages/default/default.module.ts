import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { MyProjectsModule } from '../my-projects/my-projects.module';


@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    MyProjectsModule
  ]
})
export class DefaultModule { }
