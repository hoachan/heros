import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FlashcardsRoutingModule } from './flashcards-routing.module';

import { FlashcardsComponentsModule } from './components/index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlashcardsRoutingModule,
    FlashcardsComponentsModule,
  ],
  declarations: []
})
export class FlashcardsModule { }
