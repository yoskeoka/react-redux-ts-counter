import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './counter/Container';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
