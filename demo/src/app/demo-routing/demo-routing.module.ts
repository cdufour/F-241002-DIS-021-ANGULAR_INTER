import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    MenuComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'page1', component: Page1Component },
      { path: 'page2/:name', component: Page2Component }
    ]),
  ],
  exports: [MenuComponent]
})
export class DemoRoutingModule { }
