import React from 'react';

const FancyBorder = (props)=>{
    return(
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    );

}


const Dialog = (props)=>{
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialg-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
        
    );

}

export class SignUpDialog extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''}
    }
    handleChange(e){
        this.setState({ login: e.target.value});
    }
    handleSignUp(){
        alert(`Welcome abroad,${this.state.login}!`);
    }
    render(){
        return(
        <Dialog title ="Mars Exploration program"
                message = "how should we refer to you?">
            <input value={this.state.login} onChange={this.handleChange}/>
            <button onClick= {this.handleSignUp}>
                Sign me up!
            </button>

        
        </Dialog>
        );
    }
}

