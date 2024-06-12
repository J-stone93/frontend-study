import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';

// https://react-bootstrap.netlify.app/
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap CSS추가 꼭 임포트해줘야 스타일 적용 됨
// https://fkhadra.github.io/react-toastify/installation
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS추가

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
