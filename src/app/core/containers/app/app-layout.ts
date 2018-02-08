import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MediaMatcher} from '@angular/cdk/layout';
import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Store} from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import * as fromAuth from '../../../auth/reducers';
import * as layout from '../../actions/layout';
import * as Auth from '../../../auth/actions/auth';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl : './app-layout.html',
  styleUrls : ['./app-layout.css'] 
})
export class AppComponent {
  mobileQuery: MediaQueryList;
  editCssStyle : string;
  fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array(50).fill(0).map(() =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;
  public showSidenav$: Observable<boolean>;
  public loggedIn$: Observable<boolean>;

  public sidenavAble : boolean;
  constructor(
      private store: Store<fromRoot.State>,
      changeDetectorRef: ChangeDetectorRef, 
    //   media: MediaMatcher
    ) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    this.loggedIn$ = this.store.select(fromAuth.getLoggedIn);

    this.showSidenav$.subscribe(showSidenave => this.sidenavAble = showSidenave);
    /**
     * sidenave open
     */
    this.mobileQuery = window.matchMedia(`(max-width: 960px)`);
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
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

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openSidenav2(){

  }

}
