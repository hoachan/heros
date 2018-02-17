import { CommonModule } from '@angular/common';
import { FcSearchImgService } from './fc-search-img.service';

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FcSearchImgComponent } from './fc-search-img.component';
import { FcImgGalleryComponent } from './fc-img-gallery/fc-img-gallery.component';

import { MaterialModule } from '../../../material';

import { ReactiveFormsModule } from '@angular/forms';

export const COMPONENTS = [
  FcSearchImgComponent,
  FcImgGalleryComponent,
];
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers: [FcSearchImgService],
  entryComponents: COMPONENTS,
})
export class FcSearchImgModule { }