import React from "react";
import Dialog from 'react-toolbox/lib/dialog';
import {Button, IconButton} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import theme from './style.css';
import 'whatwg-fetch';




export class Login extends React.Component {
constructor(){
    super();
    this.state = {
    active: false,
    email : '',
    password : '',
    passValid : true,
    emailType : true,
    formValid : false


  };
  }

  handleToggle = () => {
    this.setState({
        active: !this.state.active,
        email : '',
        password : '',
        passValid : true,
        formValid1 : false,
        emailType :true,
        formValid2 :false,

    });
  }

  handleChange = (name, value) => {
      this.setState({...this.state, [name]: value});
      if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value))&&name=="email"){
         this.setState({
         emailType : false});
      }
      else if((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value))&&name=="email"){
        this.setState({
        emailType : true,formValid1:true});
      }
      else if(name==="password"&& !value){
         this.setState({
         passValid : false});
         console.log("it is required");
     }
     else if(name==="password"&&value){
         this.setState({
         passValid : true,formValid2:true});
     }

   };



  handleSubmit = () => {
      var TOKEN_KEY ='token';
      var email = this.state.email;
       fetch('https://localhost:3443/users/login', {
           method: "POST",
           body: JSON.stringify({email:this.state.email,password:this.state.password}),
           headers: {
               "Content-Type": "application/json"
           },
           credentials: "same-origin"
       }).then(function(response) {
           return response.json();

    }).then(function(data){
        if(data.success){



        localStorage.setItem(TOKEN_KEY,data.token);
        alert("Login successful");


        }
        else {
            alert("Login un-successful");

        }

    },function(err){
        console.log(err.message);
    });
  }


  actions = [
    { label: "cancel", onClick: this.handleToggle},
    { label: "Login", onClick: this.handleSubmit}
  ];

  render () {
    return (
      <div className="container">


        <Button theme={theme} onClick={this.handleToggle} ><span style = {{color:'white'}}>Login </span></Button>
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='Login'
        >
            <form noValidate>
                <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')}
      />
                { this.state.emailType ? null : <span> Invalid email id </span> }
                <Input type='password' label='Password' icon='lock' value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
                { this.state.passValid ? null : <span> Password is required </span> }


            </form>
        </Dialog>
      </div>
    );
  }

}
