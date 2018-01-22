import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-sidenav',
  template: `
    <mat-sidenav [opened]="open" fullscreen>
      <mat-nav-list>
        <ng-content></ng-content>
      </mat-nav-list>
    </mat-sidenav>
  `,
  styles: [
    `
    mat-sidenav {
      width: 300px;
      min-height : 500px;
    }
  `,
  ],
})
export class SidenavComponent {
  @Input() open = false;
}
