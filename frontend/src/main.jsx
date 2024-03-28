import axios from 'axios';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import { store } from './redux/store'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

if (localStorage.userToken) {
  const { userToken } = JSON.parse(localStorage.userToken);
  axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer
      position="top-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <App />
  </Provider>
)
