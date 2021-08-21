import "bootstrap/dist/css/bootstrap-grid.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById('root')
);
