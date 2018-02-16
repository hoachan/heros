import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ImageInfo, generateMocImage, generateMocPaging } from '../../models/image';
import { FcSearchImgService } from './fc-search-img.service';

@Component({
  selector: 'fc-search-img',
  templateUrl: './fc-search-img.component.html',
  styleUrls: ['./fc-search-img.component.css']
})
export class FcSearchImgComponent implements OnInit {
  @Input() data;
  public searchForm : FormGroup;
  public imageInfo : ImageInfo;
  constructor(
    private fb : FormBuilder,
    public searchImg : FcSearchImgService,
  ) {}

  ngOnInit() {
    this.buildSearchForm();
  }
  
  buildSearchForm(){
    this.searchForm = this.fb.group({
      key :''
    });
  }

  submit() {
    console.log(this.searchForm.value.key);
  }

  reset(){
    this.searchForm.reset();
  }
}
