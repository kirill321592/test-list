import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store.js'
import App from "./app"
import "./index.scss"

ReactDom.render(
  <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root'),
);