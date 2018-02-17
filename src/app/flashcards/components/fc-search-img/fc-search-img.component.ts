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
    public searchImgService : FcSearchImgService,
  ) {}

  ngOnInit() {
    this.buildSearchForm();
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
}
