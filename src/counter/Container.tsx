
import Counter from './Counter';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { decrement, increment } from './module';
import { ReduxAction, ReduxState } from '../store';

export class ActionDispatcher {
    constructor(private dispatch: (action: ReduxAction) => void) { }
    public increment(amount: number) {
        this.dispatch(increment(amount));
    }

    public decrement(amount: number) {
        this.dispatch(decrement(amount));
    }
}

export default connect(
    (state: ReduxState) => ({ value: state.counter }),
    (dispatch: Dispatch<ReduxAction>) => ({ actions: new ActionDispatcher(dispatch) })
)(Counter);