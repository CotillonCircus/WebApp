import React from 'react';
import ReactDOMClient from "react-dom/client";
import './index.css';
import App from './App';
import store from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const container = document.getElementById("root")
const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
  </BrowserRouter>
  );

