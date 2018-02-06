import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

import { Flashcard } from './../../models/flashcard';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'fc-create-card',
  templateUrl : './flashcard-create.html',
  styleUrls    : ['./flashcard-create.css'],
})
export class FlashcardCreateComponent implements OnInit {

  public db ?: any ;
  public fcForm : FormGroup;

  private URL         = 'input url in here';
  constructor(
    private http : HttpClient,
  ){

    // var config = {
    //   /**
    //    * input config
    //    */
    // }
    // firebase.initializeApp(config);
  }

  getDataFromFirebase(){

  }

  initializeForm(){
    let title  : string = "";
    let description : string = "";

    this.fcForm = new FormGroup({
      'title'     : new FormControl(title, Validators.required),
      'description'   : new FormControl(description, Validators.required)  
    });
  }

  onSubmit(){

    const value = this.fcForm.value;
    let newFlashcard  = {
        title : value.title,
        description : value.description,
    }

    console.log(newFlashcard);
    this.http.put(this.URL + '/flashcard.json', newFlashcard).subscribe(data => console.log(data));
  }

  ngOnInit() {
    this.initializeForm();
  }
}
