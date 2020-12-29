import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Category } from './Categories';
import { Clock, Toggle } from './Misc';
import { Admin } from './Admin';
import { Game } from './Game';
import { ResponsivePlayer } from './Player'; 
export const App = () =>{
    return(
 <div className="content">
        <h1 className="awful-selfie">Pixdire</h1>
        <p className="description">the sharing app</p>
        
        <Switch>
            <Route exact path="/" component={Clock}/>
            <Route path="/player" component={ResponsivePlayer}/>
            <Route path = "/game" component={Game}/>
        </Switch>
    </div>
    )
}


