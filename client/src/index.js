import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReduxModal from 'react-redux-modal';
import samplerStore from './reducers';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={samplerStore}>    
    <div>
      <App />
      <ReduxModal />
    </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
