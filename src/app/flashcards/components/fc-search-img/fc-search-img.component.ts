import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'fc-search-img',
  templateUrl: './fc-search-img.component.html',
  styleUrls: ['./fc-search-img.component.css']
})
export class FcSearchImgComponent implements OnInit {
  @Input() data;
  constructor(
  ) {}

  ngOnInit() {
  }
  choiceImg(){
    console.log("test choice");
  }
}
