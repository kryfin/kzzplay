import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './components/App';
import './static/css/style.css';


ReactDOM.render(
    <HashRouter>  
    <App />
    </HashRouter>, // eslint-disable-line no_undef
    document.getElementById('react-container') // eslint-disable-line no-undef

)

if (module.hot) // eslint-disable-line no-undef
    module.hot.accept(); // eslint-disable-line no-undef


