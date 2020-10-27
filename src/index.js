import React from 'react';
import ReactDOM from 'react-dom';
import Message from './js/Message';

ReactDOM.render(
    <Message />,
    document.getElementById('react-container')

)

if (module.hot)
    module.hot.accept();


