import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

import { Flashcard } from './../../models/flashcard';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'fc-create-card',
  templateUrl : './flashcard-create.html',
  styleUrls    : ['./flashcard-create.css'],
})
export class FlashcardCreateComponent implements OnInit {

  public db ?: any ;
  public fcForm : FormGroup;

  formData = {}
  console = console;
  basicForm: FormGroup;

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

  /*egret form*/
  let password = new FormControl('', Validators.required);
  let confirmPassword = new FormControl('', CustomValidators.equalTo(password));

  this.basicForm = new FormGroup({
    username: new FormControl('', [
      Validators.minLength(4),
      Validators.maxLength(9)
    ]),
    firstname: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    website: new FormControl('', CustomValidators.url),
    date: new FormControl(),
    cardno: new FormControl('', [
      CustomValidators.creditCard
    ]),
    phone: new FormControl('', CustomValidators.phone('BD')),
    password: password,
    confirmPassword: confirmPassword,
    gender: new FormControl('', [
      Validators.required
    ]),
    agreed: new FormControl('', (control: FormControl) => {
      const agreed = control.value;
      if(!agreed) {
        return { agreed: true }
      }
      return null;
    })
  })
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
