import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bc-toolbar',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="openMenu.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <ng-content></ng-content>
      <!-- This fills the remaining space of the current row -->
      <span class="example-fill-remaining-space"></span>
      <bc-left-toolbar></bc-left-toolbar>
    </mat-toolbar>
  `,
  styles : [
    `
    .example-fill-remaining-space {
      /* This fills the remaining space, by using flexbox. 
         Every toolbar row uses a flexbox row layout. */
      flex: 1 1 auto;
    }
    `
  ],
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
