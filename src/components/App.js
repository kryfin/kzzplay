import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Category } from './Categories';
import { Clock, Toggle } from './Misc';
import { Admin } from './Admin';


export const App = () =>{
    return(
 <div className="content">
        <h1>Pixdire</h1>
        <p className="description">the sharing app</p>
        <div className="awful-selfie"></div>
        <Switch>
            <Route exact path="/" component={Clock}/>
            <Route path = "/toggle" component={Toggle}/>
            <Route path = "/category" component={Category}/>
            <Route path = "/admin" component={Admin}/>
        </Switch>
    </div>
    )
}


