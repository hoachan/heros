import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fc-img-gallery',
  templateUrl: './fc-img-gallery.component.html',
  styleUrls: ['./fc-img-gallery.component.css']
})
export class FcImgGalleryComponent implements OnInit {
  photos = [{
    name: 'Photo 1',
    url: 'assets/images/sq-10.jpg'
  }, {
    name: 'Photo 2',
    url: 'assets/images/sq-16.jpg'
  }, {
    name: 'Photo 3',
    url: 'assets/images/sq-15.jpg'
  }, {
    name: 'Photo 4',
    url: 'assets/images/sq-17.jpg'
  }, {
    name: 'Photo 5',
    url: 'assets/images/sq-13.jpg'
  }, {
    name: 'Photo 6',
    url: 'assets/images/sq-12.jpg'
  }, {
    name: 'Photo 7',
    url: 'assets/images/sq-11.jpg'
  }, {
    name: 'Photo 8',
    url: 'assets/images/sq-10.jpg'
  }]
  constructor() { }

  ngOnInit() {
  }

}
