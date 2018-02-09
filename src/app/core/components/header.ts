import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bc-header',
  template: `
            <mat-toolbar color="primary">
                <bc-right-toolbar (openMenu)="openMenu.emit()"></bc-right-toolbar>
                <!-- This fills the remaining space of the current row -->
                <span class="fill-remaining-space"></span>
                <bc-left-toolbar></bc-left-toolbar>
            </mat-toolbar>
        `,
  styles: [`
            .search-widh-bar {
                width : 30%;
            }
            .fill-remaining-space {
                /* This fills the remaining space, by using flexbox. 
                    Every toolbar row uses a flexbox row layout. */
                flex: 1 1 auto;
                }
            `],
})
export class HeaderComponent {

    @Output() openMenu = new EventEmitter();
}
