import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const ANGULAR_MODULES = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  RouterModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [],
  imports: [...ANGULAR_MODULES],
  exports: [...ANGULAR_MODULES],
})
export class SharedModule {}
