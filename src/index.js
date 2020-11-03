import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';


ReactDOM.render(
    <BrowserRouter>  
    <App />
    </BrowserRouter>, // eslint-disable-line no_undef
    document.getElementById('react-container') // eslint-disable-line no-undef

)

if (module.hot) // eslint-disable-line no-undef
    module.hot.accept(); // eslint-disable-line no-undef


