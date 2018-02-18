import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Image } from '../../../models/image';

@Component({
  selector: 'fc-img-gallery',
  templateUrl: './fc-img-gallery.component.html',
  styleUrls: ['./fc-img-gallery.component.css']
})
export class FcImgGalleryComponent implements OnInit {
  @Input() images : Image[];

  @Output() image = new EventEmitter<Image>();
  constructor() {}

  ngOnInit() {
    console.log(this.images);
  }

  choice(image : Image){
    this.image.emit(image);
  }
}
