import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducers';
import logger from 'redux-logger';
import apiMiddleware from './redux/middlewares/apiMiddleware';


const Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, apiMiddleware)
);


ReactDOM.render(
  // <CookiesProvider>
  <Provider store={Store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>,
  // </CookiesProvider>,
 document.getElementById('root'));
registerServiceWorker();

// TODO: fetch hobbies when rendering firts view, not when rendering Discover.
