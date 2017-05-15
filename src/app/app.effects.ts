import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {ActionTypes} from './app.actions';


@Injectable()
export class AppEffects {
    constructor(private actions$: Actions){}

    @Effect() startMulching$ = this.actions$
    .ofType(ActionTypes.START_MULCHING)

}