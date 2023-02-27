import React from 'react'
import ReactDOM from 'react-dom/client'
//import {HooksApp} from "./HooksApp.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
//import {CounterApp} from "./01-useState/CounterApp.jsx";
import {CounterWithCustomHook} from "./01-useState/CounterWithCustomHook";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHook/>
  </React.StrictMode>,
)
