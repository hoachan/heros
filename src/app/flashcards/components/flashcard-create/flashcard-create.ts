import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

import { Flashcard } from './../../models/flashcard';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'fc-create-card',
  templateUrl : './flashcard-create.html',
  styleUrls    : ['./flashcard-create.css'],
})
export class FlashcardCreateComponent implements OnInit {

  public db ?: any ;
  public fcForm : FormGroup;
  public isView : boolean = true;
  public cardViewStatus : string = 'visibility';

  constructor(
    private http : HttpClient,
    private fb : FormBuilder,
  ){

  }
  
  initializeForm(){
    let title  : string = "";
    let description : string = "";

    this.fcForm = this.fb.group({
      title : ['', Validators.required],
      description : '',
      tags : [''],
      image : ''
    });
  }

  onSubmit(){

    const value = this.fcForm.value;
    let newFlashcard  = {
        title : value.title,
        description : value.description,
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
}
