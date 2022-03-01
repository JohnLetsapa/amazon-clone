import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import {StateProvider} from './components/StateContext';
import reducer, {initialState} from './components/reducer';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StateProvider>,
  document.getElementById('root')
);


