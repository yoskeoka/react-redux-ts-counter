import * as React from 'react';
import './Counter.css';
import { CounterState } from './module';
import { ActionDispatcher } from './Container';

interface CounterProps {
  value: CounterState;
  actions: ActionDispatcher;
}

export default class Counter extends React.Component<CounterProps, {}> {
  render() {
    return (
      <div className="Counter">
        <p>score: {this.props.value.num} </p>
        <button onClick={() => this.props.actions.increment(10)}>score +10</button>
        <button onClick={() => this.props.actions.increment(1)}>score +1</button>
        <button onClick={() => this.props.actions.decrement(1)}>score -1</button>
        <button onClick={() => this.props.actions.decrement(10)}>score -10</button>
      </div>
    );
  }
}
