import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

import { Flashcard } from './../../models/flashcard';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'fc-create-card',
  templateUrl : './flashcard-create-main.html',
  styleUrls    : ['./flashcard-create.css'],
})
export class FlashcardCreateComponent implements OnInit {

  public db ?: any ;
  public fcForm : FormGroup;
  public isView : boolean = true;
  public cardViewStatus : string = 'visibility';

  imgViewSelects = [
    {value: 'steak-0', viewValue: 'Frontend'},
    {value: 'pizza-1', viewValue: 'Backend'},
  ];

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
  let confirmPassword = new FormControl('');

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
    website: new FormControl(''),
    date: new FormControl(),
    cardno: new FormControl(''),
    phone: new FormControl(''),
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
