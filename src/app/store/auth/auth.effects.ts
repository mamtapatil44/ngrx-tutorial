import { Injectable } from "@angular/core";
import { Actions, createEffect, EffectsFeatureModule, ofType } from "@ngrx/effects";
import { createAction } from "@ngrx/store";
import { authLogin, authLoginFailure, authLoginSuccess } from "./auth.actions";
import { delay, of, switchMap,map } from "rxjs";


@Injectable()
export class AuthEffects{
    login$;

    constructor(private actions$: Actions) {
      this.login$ = createEffect(() =>
        this.actions$.pipe(
          ofType(authLogin),
          switchMap(({ username, password }) => {
            if (username === 'admin' && password === 'admin') {
              return of({
                id: '1',
                name: 'Admin User',
                token: 'fake-jwt-token',
              }).pipe(
                delay(1000),
                map((user) => authLoginSuccess({ user }))
              );
            } else {
              return of(authLoginFailure({ error: 'Invalid credentials' })).pipe(
                delay(500)
              );
            }
          })
        )
      );
    }

}