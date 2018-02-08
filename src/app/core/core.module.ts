import { MaterialModule } from '../material';
import { NotFoundPageComponent } from './containers/not-found-page';
import { AppComponent } from './containers/app/app-layout';

import { LayoutComponent } from './components/layout';
import { ToolbarComponent } from './components/toolbar';
import { SidenavComponent } from './components/sidenav';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavItemComponent } from './components/nav-item';
import { LeftToolbarComponent } from './components/left-toolbar';
import { HeaderComponent } from './components/header';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
  LeftToolbarComponent,
  HeaderComponent,
];

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
  ],
  declarations: COMPONENTS,
  exports : COMPONENTS
})
export class CoreModule { 

}
