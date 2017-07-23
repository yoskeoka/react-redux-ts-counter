import counter, { CounterActions, CounterState } from './counter/module';
import { createStore, combineReducers, Action } from 'redux';

// extend when adding a new page
export default createStore(
    combineReducers({
        counter
    })
);

export type ReduxState = {
    counter: CounterState
};

export type ReduxAction = CounterActions | Action;
