import { FileUploader } from 'ng2-file-upload';
import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

import { Flashcard } from './../../models/flashcard';

import { HttpClient } from '@angular/common/http';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

/**
 * for mat-chip
 */
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'fc-flashcard-form-basic-info',
  templateUrl : './flashcard-form-basic-info.html',
  styleUrls    : ['./flashcard-form-basic-info.css'],
})
export class FlashcardFormBasicInfoComponent implements OnInit {

  public db ?: any ;
  public isView : boolean = true;
  public cardViewStatus : string = 'visibility';

  /**tag list */
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  addTagAble : boolean = true;
  max_tags : number = 5;
  public tags = [];
  colors = [
    "#800080", //purple
    "#008000", //
    "#0000FF", //blue
    "#FF0000", //red
    "#000080", //navy
  ];

  /**
   * upload image file
   */
  fileToUpload: File = null;
  public currentImage : any = "assets/images/photo-2.jpg";

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  basicForm: FormGroup;

  constructor(
    private http : HttpClient,
  ){
    this.initializeForm();
  }

  initializeForm(){
    let title  : string = "";
    let description : string = "";

    /*egret form*/
    let password = new FormControl('', Validators.required);
    let confirmPassword = new FormControl('');

    this.basicForm = new FormGroup({
      'title'         : new FormControl(title, Validators.required),
      'description'   : new FormControl(description, Validators.required),
      'image'         : new FormControl(''),
      'tags'          : new FormControl('')
    })
  }

  onSubmit(){

    const value = this.basicForm.value;
    let newFlashcard  = {
        title : value.title,
        description : value.description,
        tags : this.tags
    }

    console.log(newFlashcard);
    // this.http.put(this.URL + '/flashcard.json', newFlashcard).subscribe(data => console.log(data));
  }

  ngOnInit() {
    this.initializeForm();
  }

  changeView(){
    this.isView = !this.isView;

    this.cardViewStatus = (this.isView) ? 'visibility' : 'visibility_off';
    console.log(this.cardViewStatus);
  }

  addTag(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim() && this.checkStatusTag()) {
      this.tags.push({ name: value.trim() , color : this.colors[this.tags.length]});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: any): void {
    let index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }

    this.checkStatusTag();
  }

  checkStatusTag() : boolean{
    this.addTagAble = (this.tags.length > this.max_tags - 1) ? false : true;
    return this.addTagAble;
  }

  handleFileInput(files) {
    var reader = new FileReader();
    console.log(files);
    var that = this;
    reader.onload = function (e) {
      that.currentImage = reader.result;
      console.log(reader.result);
    };

    this.fileToUpload = files.item(0);
    reader.readAsDataURL(this.fileToUpload);
console.log(this.fileToUpload);
    // console.log(this.fileToUpload);
  }
}
