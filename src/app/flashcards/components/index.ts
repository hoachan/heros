import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../../shared/pipes';
import { MaterialModule } from '../../material';

import { FlashcardCreateComponent } from './flashcard-create';

export const COMPONENTS = [
  FlashcardCreateComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    PipesModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class FlashcardsComponentsModule {}
