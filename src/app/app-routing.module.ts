import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './core/containers/not-found-page';
import { AppComponent } from './core/containers/app/app-layout';

import { AuthGuard } from './auth/services/auth-guard.service';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'flashcards',
    pathMatch : 'full'
  },
  {
    path : 'core',
    loadChildren : './core/core.module#CoreModule',
    // canActivate: [AuthGuard],
  },
  {
    path : 'login',
    loadChildren : './auth/auth.module#AuthModule',
  },
  {
    path : 'books',
    loadChildren: './books/books.module#BooksModule',
    canActivate: [AuthGuard],
  },
  {
    path : 'flashcards',
    loadChildren : './flashcards/flashcards.module#FlashcardsModule',
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
