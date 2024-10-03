import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { ExosModule } from './exos/exos.module';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ExosModule
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
