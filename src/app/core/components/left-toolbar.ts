import { Component, Output, EventEmitter, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'bc-left-toolbar',
  template: `
  <!-- Notification toggle button -->
    <button 
        mat-icon-button
        matTooltip="Notifications" 
        [style.overflow]="'visible'" 
        class="topbar-button-right">
        <mat-icon>notifications</mat-icon>
        <span class="mat-bg-warn notification-number">3</span>
    </button>

    <button mat-icon-button [matMenuTriggerFor]="menu" class="topbar-button-right img-button">
        <img src="assets/images/face-7.jpg" alt="images has not">
    </button>
    <mat-menu #menu="matMenu">
        <button mat-menu-item routerLink="/profile/overview">
            <mat-icon>account_box</mat-icon>
            <span>Profile</span>
        </button>
        <button mat-menu-item routerLink="/profile/settings">
            <mat-icon>settings</mat-icon>
            <span>Account Settings</span>
        </button>
        <button mat-menu-item routerLink="/calendar">
            <mat-icon>date_range</mat-icon>
            <span>Calendar</span>
        </button>
        <button mat-menu-item routerLink="/sessions/signin">
            <mat-icon>exit_to_app</mat-icon>
            <span>Sign out</span>
        </button>
    </mat-menu>
  `,
})
export class LeftToolbarComponent {
    @Output() openSubMenu = new EventEmitter();
}
