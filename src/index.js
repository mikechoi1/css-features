//import react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//take the react component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);