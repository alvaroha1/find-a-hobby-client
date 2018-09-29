import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
 document.getElementById('root'));
registerServiceWorker();

// TODO: fetch hobbies when rendering firts view, not when rendering Discover.
