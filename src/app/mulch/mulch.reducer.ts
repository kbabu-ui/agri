import {Action} from '@ngrx/store';
import {ActionTypes} from '../app.actions';

interface State {
    preparing : boolean;
}

const initialState: State = {
    preparing:false
}

export function reducer (
    state : State = initialState, action:Action
){
    switch(action.type){
        case ActionTypes.START_MULCHING : {
            return {
                preparing : true
            };
        }

        default : {
            return state;
        }
    }
}