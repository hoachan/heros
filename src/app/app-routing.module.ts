import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './core/containers/not-found-page';

import { AuthGuard } from './auth/services/auth-guard.service';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/core',
    pathMatch : 'full'
  },
  {
    path : 'core',
    loadChildren : './core/core.module#CoreModule'
  },
  {
    path : 'login',
    loadChildren : './auth/auth.module#AuthModule',
    // canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
