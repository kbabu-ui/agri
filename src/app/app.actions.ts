
import {Action} from '@ngrx/store'

export const ActionTypes = {
    START_MULCHING : 'BEGIN_MULCHING',
    STOP_MULCHING : 'END_MULCHING',
    PREPARE_MULCHING : 'PREPARE_MULCHING'
};


export function startMulching() : Action {
    return {
        type:ActionTypes.START_MULCHING,
        payload:{},
    };
}

