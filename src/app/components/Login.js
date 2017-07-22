import React from "react";
import Dialog from 'react-toolbox/lib/dialog';
import {Button, IconButton} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import {Modal} from './Modal';
import theme from './style.css';
import 'whatwg-fetch';
import history from './history';



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
        formValid : false,
        emailType :true,
        failure:false,
        status:'',
        message:''


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
        emailType : true});

      }
      else if(name==="password"&& !value){
         this.setState({
         passValid : false});
         console.log("it is required");
     }
     else if(name==="password"&&value){
         this.setState({
         passValid : true});

     }

   };



  handleSubmit = () => {
      if(this.state.passValid&&this.state.emailType){
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

    }).then((data)=>{

        if(data.success){

            fetch('https://localhost:3443/users/login/'+email).then(
                function(response){
                    return response.json();

                }).then(function(user){
                    var credentials ={email:email,token:data.token,type:user.type}
                    localStorage.setItem(TOKEN_KEY,JSON.stringify(credentials));

                    if(user.type=="user"){

                        window.location.href = "http://localhost:8080/user";
                    }
                    else if(user.type=="admin"){
                        window.location.href = "http://localhost:8080/superAdmin";
                    }
                    else if(user.type=="exUser"){
                        window.location.href = "http://localhost:8080/ex";
                    }
            });
        }
        else {
            console.log(data.err);
            this.handleToggle();
            this.setState({failure:true,status:data.status,message:data.err.message});


        }
    },function(err){
        console.log(err.message);
    });
}
else {
    alert("please fill the form correctly");
}
  }


  actions = [
    { label: "cancel", onClick: this.handleToggle},
    { label: "Login",  onClick: this.handleSubmit}
  ];

  render () {
    return (
      <div className="container">


        <Button className ={theme.themedButton} theme={theme} onClick={this.handleToggle} label="login" icon="exit_to_app" inverse></Button>
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


        {this.state.failure ? <Modal title={this.state.status} message={this.state.message} active={true} />:null}


      </div>
    );
  }

}
