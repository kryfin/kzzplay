
import React from 'react';


export const Element = () =>{
    return(
 <div className="content">
        <h1>Pixdire</h1>
        <p className="description">the sharing app</p>
        <div className="awful-selfie"></div>
        <Clock />
    </div>
    )
}

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state= {date: new Date()};
    }
    render(){
    return(
        <div>
           <p>It is {this.state.date.toLocaleTimeString()}</p>     
        </div>
    );
    }
}


