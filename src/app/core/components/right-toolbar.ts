import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bc-right-toolbar',
  template: `
      <button mat-icon-button (click)="openMenu.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      Hoa Chan
      <!-- Search form -->
      <div 
          fxFlex
          fxHide.lt-sm="true" 
          class="search-bar search-widh-bar"
          >
          <form class="top-search-form">
          <mat-icon role="img">search</mat-icon>
          <input autofocus="true" placeholder="Search" type="text">
          </form>
      </div>
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
export class RightToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
