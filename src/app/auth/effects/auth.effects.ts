import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions} from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { tap, map, exhaustMap, catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import {
  Login,
  LoginSuccess,
  LoginFailure,
  AuthActionTypes,
} from '../actions/auth';
import { User, Authenticate } from '../models/user';

@Injectable()
export class AuthEffects {
  
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  login$ = this.actions$.ofType(AuthActionTypes.Login).
        pipe(
          map((action: Login) => action.payload),
          exhaustMap((auth: Authenticate) =>
            this.authService
              .login(auth)
              .pipe(
                map(user => new LoginSuccess({ user })),
                catchError(error => of(new LoginFailure(error)))
              )
          )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$
        .ofType(AuthActionTypes.LoginSuccess)
        .pipe(
          tap(() => this.router.navigate(['/']))
        );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$
        .ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout)
        .pipe(
          tap(authed => {
            this.router.navigate(['/login']);
          })
        );
}
