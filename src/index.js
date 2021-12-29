import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Gallery from './Components/Gallery/Gallery'
import Welcome from './Components/WelcomeSection/Welcome'
import Shop from './Components/Shop/Shop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App/>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="gallery" element={<Gallery/>} />
      <Route path="shop"  element={<Shop/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
