
import { isNull } from 'lodash';
import React from 'react';


export const Element = () =>{
    return(
 <div className="content">
        <h1>Pixdire</h1>
        <p className="description">the sharing app</p>
        <div className="awful-selfie"></div>
        <Clock />
        <Toggle />
        <LoginControl />
        <MailBox unreadMessages={['React', 'Re: React','Re: Re: React']} />
        <Page />
        <NumberList numbers={[1, 2, 3, 4, 5, 6]}/>
    </div>
    )
}

function NumberList(props){
    
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
     <li key={number.id}>{number}</li>
    );
    return(
        <ul>{listItems}</ul>
    );

}

function MailBox(props){
    const unreadMessages = props.unreadMessages;
    return(
        <div>
            <p>Hello!</p>
            {unreadMessages.length>0 &&
            <p>
                you have {unreadMessages.length} unread messages
            </p>
            }
        </div>
    );
}




class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }
    handleLoginClick(){
        this.setState({ isLoggedIn: true });
    }
    handleLogoutClick(){
        this.setState( { isLoggedIn: false} )    
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        {isLoggedIn
            ?button = <LogoutButton onClick = {this.handleLogoutClick}/>
            :button = <LoginButton onClick = {this.handleLoginClick}/>
        }
        
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}  
            </div>
        )
    }

}

function WarningBanner(props) {
    if(!props.warn){
        return null;
    }
    return (
        <div className="warning">
            Warning!
        </div>
    );
}
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick(){
        this.setState(state =>({
            showWarning: !state.showWarning
        }));
    }
    render(){
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} /> 
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'hide': 'show'}
                </button>
            </div>
        );
    }

}
function LoginButton(props){
    return(
       <button onClick={props.onClick}>
           Login
       </button> 

    );
}
function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
            Logout
        </button>

    );
}

function UserGreeting(props){
    return <h1>Wellcome back!</h1>;
}
function GuestGreeting (props){
    return <h1>Please sign up</h1>;

}

function Greeting (props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/> ;
    }
    return <GuestGreeting/>;
}

class Toggle extends React.Component {
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

class Clock extends React.Component {
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
        </div>
    );
    }
}


