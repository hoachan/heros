import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'fc-dialog-search-img',
  templateUrl: './fc-dialog-search-img.component.html',
  styleUrls: ['./fc-dialog-search-img.component.css']
})
export class FcDialogSearchImgComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FcDialogSearchImgComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {}

  ngOnInit() {
  }
  choicedImg(image){
    this.dialogRef.close(image);
  }
}
