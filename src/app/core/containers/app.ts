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
      <bc-header
       (openMenu)="clickMenu()"
      ></bc-header> 
      <bc-sidenav [open]="showSidenav$ | async">
        <bc-nav-item *ngIf="loggedIn$ | async" routerLink="/books" icon="book" hint="View your book collection">
          My Collection
        </bc-nav-item>
        <bc-nav-item *ngIf="loggedIn$ | async" routerLink="/books/find" icon="search" hint="Find your next book!">
          Browse Books
        </bc-nav-item>
        <bc-nav-item *ngIf="!(loggedIn$ | async)" routerLink="/login">
          Sign In
        </bc-nav-item>
        <bc-nav-item routerLink="/flashcards" icon="book" hint="View your flashcards collection">
          Flashcards
        </bc-nav-item>
        <bc-nav-item (navigate)="logout()" *ngIf="loggedIn$ | async">
          Sign Out
        </bc-nav-item>
      </bc-sidenav>
      <!-- App content -->
      <div class="content-layout">
      <router-outlet></router-outlet>
      </div>
    </bc-layout>
  `,
  styles : [
    `
    `
  ] 
})
export class AppComponent {
  public showSidenav$: Observable<boolean>;
  public loggedIn$: Observable<boolean>;

  public sidenavAble : boolean;
  constructor(
      private store: Store<fromRoot.State>
    ) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    this.loggedIn$ = this.store.select(fromAuth.getLoggedIn);

    this.showSidenav$.subscribe(showSidenave => this.sidenavAble = showSidenave);
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
    this.store.dispatch(new Auth.Logout());
  }

  clickMenu(){
    this.sidenavAble = !this.sidenavAble;

    if (!this.sidenavAble) {
      return this.closeSidenav();
    }

    return this.openSidenav();
  }
}
