import React from 'react';
import { Link } from 'react-router-dom';

export class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = { isToggleOn: true};
        this.handleClick = this.handleClick.bind(this); // bind is necessary for `this` work in encapsulation
    }
    handleClick(){
        this.setState(state =>({
            isToggleOn: !state.isToggleOn
        }));
    }
    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ?'ON':'OFF'}
                </button>
                );
    }

}

export class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state= {date: new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date()
        });        

    }

    render(){
    return(
        <div>
           <p>It is {this.state.date.toLocaleTimeString()}</p>
           <ul>
                <li>
                    <Link to="/player">player</Link>
                </li>
                <li>
                    <Link to="/game">Game</Link>
                </li>

            </ul>    
        </div>
    );
    }
}


