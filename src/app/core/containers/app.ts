import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store} from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromAuth from '../../auth/reducers';
import * as layout from '../actions/layout';
import * as Auth from '../../auth/actions/auth';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-layout>
      <bc-sidenav [open]="showSidenav$ | async">
        <bc-nav-item (navigate)="closeSidenav()" *ngIf="loggedIn$ | async" routerLink="/" icon="book" hint="View your book collection">
          My Collection
        </bc-nav-item>
        <bc-nav-item (navigate)="closeSidenav()" *ngIf="loggedIn$ | async" routerLink="/core" icon="search" hint="Find your next book!">
          Browse Books
        </bc-nav-item>
        <bc-nav-item (navigate)="closeSidenav()" *ngIf="!(loggedIn$ | async)" routerLink="/login">
          Sign In
        </bc-nav-item>
        <bc-nav-item (navigate)="logout()" *ngIf="loggedIn$ | async">
          Sign Out
        </bc-nav-item>
      </bc-sidenav>
      <bc-toolbar (openMenu)="openSidenav()">
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
        <!-- This fills the remaining space of the current row -->
        <span class="example-fill-remaining-space"></span>
        <bc-toolbar-menu></bc-toolbar-menu>
      </bc-toolbar>
      <router-outlet></router-outlet>
    </bc-layout>
  `,
  styles : [
    `
    .example-fill-remaining-space {
      /* This fills the remaining space, by using flexbox. 
         Every toolbar row uses a flexbox row layout. */
      flex: 1 1 auto;
    }
    .search-widh-bar {
      width : 45%;
    }
    `
  ] 
})
export class AppComponent {
  public showSidenav$: Observable<boolean>;
  public loggedIn$: Observable<boolean>;

  constructor(
      private store: Store<fromRoot.State>
    ) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    this.loggedIn$ = this.store.select(fromAuth.getLoggedIn);

    // this.showSidenav$ = of(true);
    // this.loggedIn$  = of(false);

  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(new layout.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenav());
  }

  logout() {
    this.closeSidenav();

    this.store.dispatch(new Auth.Logout());
  }
}