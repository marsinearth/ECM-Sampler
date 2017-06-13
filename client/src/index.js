import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'; 
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root';
import './index.css';

let store = createStore(Controller);

render(
  <Root store={store} />,
  document.getElementById('root')
);
registerServiceWorker();
