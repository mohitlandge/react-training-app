import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewApp from './NewApp';
import reportWebVitals from './reportWebVitals';
import "./reduxstore/store";
import store from './reduxstore/store';
import { Provider } from 'react-redux';
import axios from 'axios'
import './components/generatordemo';


axios.interceptors.request.use((request) => {
  // alert('through request interceptor')
  // alert(request.url)
  if (request.url.includes("cart")) {
    if (localStorage.token) {
      request['headers']['authtoken'] = localStorage.token
      return request
    } else {
    return Promise.reject()
    }
  }
  return request
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NewApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
