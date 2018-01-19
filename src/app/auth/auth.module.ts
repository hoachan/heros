import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginFormComponent } from './components/login-form.component';
import { LoginPageComponent } from './containers/login-page.component';
import { MaterialModule } from '../material';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './effects/auth.effects';
import { reducers } from './reducers';

export const COMPONENTS = [LoginPageComponent, LoginFormComponent];

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule,

    /**
     * ngrx saving store
     */
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: COMPONENTS,
  exports : COMPONENTS,
  providers: [AuthService, AuthGuard],
})
export class AuthModule { 

}
