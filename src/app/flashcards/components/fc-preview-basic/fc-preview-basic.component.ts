import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

import { Image } from '../../models/image';
@Component({
  selector: 'fc-preview-basic',
  templateUrl : './fc-preview-basic.component.html',
  styleUrls    : ['./fc-preview-basic.component.css'],
})

export class FcPreviewBasicComponent implements OnInit {

    @Input() data : any;
    @Input() tags : any;
    @Input() currentImage : string = "assets/images/photo-2.jpg";

    ngOnInit() {
    }
}