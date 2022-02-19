import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './TCRUD/App';
// import App from './App';
import 'antd/dist/antd.css';
// import ThirdPage from './ThirdPage';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
