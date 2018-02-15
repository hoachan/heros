import { CommonModule } from '@angular/common';
import { FcDialogSearchImgService } from './fc-dialog-search-img.service';

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FcDialogSearchImgComponent } from './fc-dialog-search-img.component';
import { MaterialModule } from '../../../../material';
import { FcSearchImgModule } from '../../fc-search-img/fc-search-img.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FcSearchImgModule,
    FlexLayoutModule,
  ],
  exports: [FcDialogSearchImgComponent],
  declarations: [FcDialogSearchImgComponent],
  providers: [FcDialogSearchImgService],
  entryComponents: [FcDialogSearchImgComponent]
})
export class FcDialogSearchImgModule { }