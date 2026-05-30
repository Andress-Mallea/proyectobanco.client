import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Add this import
import { AdminComponent } from './admin.component';
import { CurrencyPipe } from '@angular/common';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CurrencyPipe // Add this to imports
  ],
})
export class AdminModule { }
