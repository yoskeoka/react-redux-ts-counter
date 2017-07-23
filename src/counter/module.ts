import { Action } from 'redux';

// actions
export type CounterActions = IncrementAction | DecrementAction;

export interface IncrementAction extends Action {
    type: 'INCREMENT';
    amount: number;
}
export function increment(amount: number): IncrementAction {
    return {
        type: 'INCREMENT',
        amount: amount
    };
}

export interface DecrementAction extends Action {
    type: 'DECREMENT';
    amount: number;
}
export function decrement(amount: number): DecrementAction {
    return {
        type: 'DECREMENT',
        amount: amount
    };
}

// reducer
export interface CounterState {
    num: number;
}

const initialState: CounterState = { num: 0 };

export default function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, { num: state.num + action.amount });
        case 'DECREMENT':
            return Object.assign({}, state, { num: state.num - action.amount });
        default:
            return state;
    }
}