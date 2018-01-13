import { AppComponent } from './containers/app';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

AppComponent
const routes: Routes = [
  {
    path : '',
    component : AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
