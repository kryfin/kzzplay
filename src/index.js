import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './js/App';


ReactDOM.render(
    <App />,
    document.getElementById('react-container') // eslint-disable-line no-undef

)

if (module.hot) // eslint-disable-line no-undef
    module.hot.accept(); // eslint-disable-line no-undef


