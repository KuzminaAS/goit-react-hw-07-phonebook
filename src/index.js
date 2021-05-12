import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import storeAll  from './redux/contacts/store.js';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={storeAll.store} persistor={storeAll.persistor}>
    <PersistGate loading={null} persistor={storeAll.persistor}>
      <BrowserRouter>
        <App />
        </BrowserRouter>
      </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
