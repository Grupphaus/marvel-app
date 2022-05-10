/** Modules */
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

/** Commonly-used Material Modules */
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorComponent } from './components/paginator/paginator/paginator.component';


@NgModule({
  declarations: [
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  exports: [
    PaginatorComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
  ]
})
export class SharedModule { }
