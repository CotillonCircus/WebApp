import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './components/auth0-provider-with-history/auth0-provider-with-history';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? '/v1/api'
    : 'http://localhost:3001/v1/api';

root.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0ProviderWithHistory>
  </BrowserRouter>
);
