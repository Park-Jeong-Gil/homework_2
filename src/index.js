import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

ReactDOM.render(<App />, document.getElementById('root'));

