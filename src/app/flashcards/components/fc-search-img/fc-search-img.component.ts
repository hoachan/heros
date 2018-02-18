import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ImageInfo, Image, generateMocImage, generateMocPaging } from '../../models/image';
import { FcSearchImgService } from './fc-search-img.service';

@Component({
  selector: 'fc-search-img',
  templateUrl: './fc-search-img.component.html',
  styleUrls: ['./fc-search-img.component.css']
})
export class FcSearchImgComponent implements OnInit {
  @Input() data;
  @Output() image = new EventEmitter<Image>();

  public searchForm : FormGroup;
  public images : ImageInfo;
  constructor(
    private fb : FormBuilder,
    public searchImgService : FcSearchImgService,
  ) {}

  ngOnInit() {
    this.buildSearchForm();
    this.createImages();
  }
  
  buildSearchForm(){
    this.searchForm = this.fb.group({
      key : [''],
    });
  }

  submit() {
    let key = this.searchForm.value.key;
    let result$;
    if (key){
      result$ = this.searchImgService.searchKey(key);
      result$.subscribe(data => console.log(data));
    }
  }

  reset(){
    this.searchForm.reset();
  }

  createImages(){
    this.searchImgService.searchKey('key').subscribe(images => this.images = {...images});
  }

  choicedImg(img : Image){
    this.image.emit(img);
  }
}
