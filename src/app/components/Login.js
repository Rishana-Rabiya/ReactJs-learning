import React from "react";
import Dialog from 'react-toolbox/lib/dialog';
import {Button, IconButton} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import {Modal} from './Modal';
import theme from './style.css';
import 'whatwg-fetch';
import {constants} from './constants';
import { Link} from 'react-router-dom';





export class Login extends React.Component {
constructor(){
    super();
    this.state = {
    active: false,
    email : '',
    password : '',
    passValid : true,
    emailType : true,
    formValid1 : false,
    formValid2: false


  };
  }

  handleToggle = () => {
    this.setState({
        active: !this.state.active,
        email : '',
        password : '',
        passValid : true,
        formValid1 : false,
        formValid2:false,
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
         emailType : false,
         formValid1:false});

      }
      else if((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value))&&name=="email"){
        this.setState({
        emailType : true,formValid1:true});

      }
      else if(name==="password"&& !value){
         this.setState({
         passValid : false,
         formValid2:false});
         console.log("it is required");
     }
     else if(name==="password"&&value){
         this.setState({
         passValid : true,formValid2:true});

     }

   };



  handleSubmit = () => {
      console.log(this.state.formValid1);
      if(this.state.formValid1&&this.state.formValid2){
      var TOKEN_KEY ='Token';
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
                (response)=>{
                    return response.json();

                }).then((user)=>{
                    var credentials ={email:email,token:data.token,type:user.type}

                    localStorage.setItem(TOKEN_KEY,JSON.stringify(credentials));


                    if(user.type=="user"){
                        this.props.history.push('/user');

                    }
                    else if(user.type=="admin"){
                        console.log(JSON.parse(localStorage.getItem(TOKEN_KEY)));
                        this.props.history.push('/superAdmin');

                    }
                    else if(user.type=="exUser"){
                        this.props.history.push('/ExUser');
                    }
            });
        }
        else {
            console.log(data.err);
            this.handleToggle();
            this.setState({failure:true,status:data.err.status,message:data.err.message});


        }
    },function(err){
        console.log(err.message);
    });
}
else {
    alert(constants.FILL_FORM);
}
  }


  actions = [
    { label: constants.CANCEL, onClick: this.handleToggle},
    { label: constants.LOGIN,  onClick: this.handleSubmit}
  ];

  render () {
    return (
      <div className="container">


        <Button className ={theme.themedButton} theme={theme} onClick={this.handleToggle} label={constants.LOGIN} icon="exit_to_app" inverse></Button>
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title={constants.LOGIN}


        >
            <form noValidate>
                <Input type='email' label={constants.EMAIL} icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')}
      />
                { this.state.emailType ? null : <span> Invalid email id </span> }
                <Input type='password' label={constants.PASSWORD} icon='lock' value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
                { this.state.passValid ? null : <span> Password is required </span> }


            </form>
        </Dialog>


        {this.state.failure ? <Modal title={this.state.status} message={this.state.message} active={true}  />:null}


      </div>
    );
  }

}
