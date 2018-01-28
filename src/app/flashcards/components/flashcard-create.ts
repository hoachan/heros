import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Flashcard } from './../models/flashcard';


@Component({
  selector: 'fc-create-card',
  template: `
    <div class="flashcard-create-container">
      <mat-card>
        <mat-card-content>
            <mat-form-field>
              <textarea matInput placeholder="入力"
              matTextareaAutosize matAutosizeMinRows="2"
              matAutosizeMaxRows="10"
              ></textarea>
            </mat-form-field>

            <mat-form-field>
              <textarea matInput placeholder="入力"
              matTextareaAutosize matAutosizeMinRows="2"
              matAutosizeMaxRows="10"
              ></textarea>
            </mat-form-field>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button class="submit-flashcard">
            Save Flashcard
          </button>
        </mat-card-actions>
      </mat-card>

    </div>
    <mat-card>
      <mat-card-title-group>
        <mat-card-title>Hello</mat-card-title>
      </mat-card-title-group>
      <mat-card-content>
        <p [innerHtml]="description"></p>
      </mat-card-content>
      <mat-card-footer class="footer">
        <p>Footer</p>
      </mat-card-footer>
      <mat-card-actions align="start">
        <button mat-button>
        Remove Book from Collection
        </button>

        <button mat-button>
        Add Book to Collection
        </button>
      </mat-card-actions>
    </mat-card>

  `,
  styles: [
    `
    :host {
      display: flex;
      justify-content: center;
      margin: 75px 0;
    }
    mat-card {
      max-width: 600px;
    }
    mat-card-title-group {
      margin-left: 0;
    }
    img {
      width: 60px;
      min-width: 60px;
      margin-left: 5px;
    }
    mat-card-content {
      margin: 15px 0 50px;
    }
    mat-card-actions {
      margin: 25px 0 0 !important;
    }
    mat-card-footer {
      padding: 0 25px 25px;
      position: relative;
    }

    .submit-flashcard {
      background : #3f51b5;
      color : white;
    }
  `,
  ],
})
export class FlashcardCreateComponent {

}
