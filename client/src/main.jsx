import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import {App} from './App'
import './index.css'
import {AppTheme} from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    </AppTheme>
  </React.StrictMode>
)
