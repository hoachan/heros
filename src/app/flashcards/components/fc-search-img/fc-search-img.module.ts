import { CommonModule } from '@angular/common';
import { FcSearchImgService } from './fc-search-img.service';

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FcSearchImgComponent } from './fc-search-img.component';
import { MaterialModule } from '../../../material';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [FcSearchImgComponent],
  declarations: [FcSearchImgComponent],
  providers: [FcSearchImgService],
  entryComponents: [FcSearchImgComponent]
})
export class FcSearchImgModule { }