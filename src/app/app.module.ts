import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AppComponent } from './core/containers/app';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { FlashcardsModule } from './flashcards/flashcards.module';

import { CustomRouterStateSerializer } from './shared/utils';
/**
 * ngrx setting
 */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './reducers';

import { DBModule } from '@ngrx/db';
import { schema } from './db';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    BooksModule,
    FlashcardsModule,
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  /**
   * EffectsModule.forRoot() is imported once in the root module and
   * sets up the effects class to be initialized immediately when the
   * application starts.
   *
   * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
   */
    EffectsModule.forRoot([]),
  /**
   * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
   * service available.
   */
    DBModule.provideDB(schema),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
