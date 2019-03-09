import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Crud from './crud';
import * as serviceWorker from './serviceWorker';


//This is the entry point of whole application

ReactDOM.render(<Crud />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
