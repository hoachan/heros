import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bc-header',
  template: `
            <bc-toolbar (openMenu)="openMenu.emit()">
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
                <span fxFlex></span>
            </bc-toolbar>
        `,
  styles: [`
                .search-widh-bar {
                    width : 45%;
                }
            `],
})
export class HeaderComponent {

    @Output() openMenu = new EventEmitter();
}
