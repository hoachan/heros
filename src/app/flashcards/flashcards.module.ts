import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashcardsRoutingModule } from './flashcards-routing.module';

import { FlashcardsComponentsModule } from './components/index';

@NgModule({
  imports: [
    CommonModule,
    FlashcardsRoutingModule,
    FlashcardsComponentsModule
  ],
  declarations: []
})
export class FlashcardsModule { }
