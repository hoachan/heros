import { CommonModule } from '@angular/common';
import { FcSearchImgService } from './fc-search-img.service';

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FcSearchImgComponent } from './fc-search-img.component';
import { MaterialModule } from '../../../material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [FcSearchImgComponent],
  declarations: [FcSearchImgComponent],
  providers: [FcSearchImgService],
  entryComponents: [FcSearchImgComponent]
})
export class FcSearchImgModule { }