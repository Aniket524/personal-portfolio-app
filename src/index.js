import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// reportWebVitals();
