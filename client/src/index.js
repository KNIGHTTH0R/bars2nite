import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './main.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Root from './Root';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
registerServiceWorker();
