import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashcardCreateComponent } from './components/flashcard-create/fc-create.component';

const routes: Routes = [
  {
    path : '',
    component : FlashcardCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashcardsRoutingModule { }
