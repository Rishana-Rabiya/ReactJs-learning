import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';
import {constants} from '../common/constants';
import theme from '../styles/style.css';
import {Modal} from './Modal';
import {post} from '../common/fetch';


export class AddExecutive extends React.Component {
    constructor(props){
        super();
        this.state = {
        active:false,
        email : '',
        password : '',
        cpassword : '',
        fname:'',
        lname:'',
        passValid : true,
        formValid1 : false,
        cpassValid : true,
        formValid3 : false,
        formValid2:false,
        emailType :true,
        nameValid:true,
        confirm :true,
        flag:false,
        message:''

        };

    }
    componentDidMount(){
        console.log("here");
        this.handleToggle();
    }



    handleToggle = () => {
        this.setState({active: !this.state.active});
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
       else if(name==="cpassword"&& !value){
          this.setState({
          cpassValid : false,
          formValid3:false,confirm:true});
          console.log("it is required");
      }
      else if(name==="cpassword"&&value){

          if(value!=this.state.password){
              this.setState({
              confirm : false,formValid3:false,cpassValid:true});
          }
         else{
              console.log("heloo i am here");
              this.setState({
              confirm : true,formValid3:true,cpassValid:true});
          }


      }
      else if(name==="fname"&& !value){
         this.setState({
         nameValid : false,
         formValid4:false});
         console.log("it is required");
     }
     else if(name==="fname"&&value){
         this.setState({
         nameValid : true,formValid4:true});

     }

     };

 handleSubmit=()=>{
     post('executive/create',this.state,(data)=>{
         this.setState({flag:true});
         if(data.message==="exist")
         {
             this.setState({message:constants.EMAIL_EXIST})
         }
         else if(data.message==="success"){
              this.setState({message:constants.ADD_EX_SUCCESS})
         }
         else if(data.message==="invalid"){
            this.setState({message:constants.INVALID_EMAIL})
         }
     });
 }

 handleToggleAction=()=>{
     this.props.change();
 }

 handlePaste=(e)=>{
     e.preventDefault();
 }
 onChange=()=>{

     this.setState ({

     email : '',
     password : '',
     cpassword : '',
     fname:'',
     lname:'',
     passValid : true,
     formValid1 :false,
     cpassValid :true,
     formValid3 :false,
     formValid2:false,
     emailType :true,
     nameValid:true,
     confirm :true,
     flag:false,
     message:''

 });


 }


    render() {

        return (
            <Dialog

            active={this.state.active}
            onEscKeyDown={this.handleToggleAction}
            onOverlayClick={this.handleToggleAction}
            title={this.props.title}
            >
            <div className="container">
                <div className="row">

                    <Input type='email' label={constants.EMAIL} icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
                    { this.state.emailType ? null : <span> {constants.INVALID_EMAIL} </span> }
                    <Input type='text' label={constants.FIRSTNAME} icon='account_circle' value={this.state.fname} onChange={this.handleChange.bind(this, 'fname')}/>
                    { this.state.nameValid ? null : <span> {constants.FIRST_REQUIRED} </span> }
                    <Input type='text' label={constants.LASTNAME} icon='account_circle' value={this.state.lname} onChange={this.handleChange.bind(this, 'lname')} />
                    <Input type='password' label={constants.PASSWORD} icon='lock' value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
                    { this.state.passValid ? null : <span>{ constants.REQUIRED_PASSWORD} </span> }
                    <Input type='password' label={constants.CONFIRM_PASSWORD} icon='lock' value={this.state.cpassword} onChange={this.handleChange.bind(this, 'cpassword')} onPaste={this.handlePaste}/>
                    { this.state.cpassValid ? null : <span>{ constants.REQUIRED_CPASSWORD} </span> }
                    { this.state.confirm ? null : <span> {constants.PASS_MATCH} </span> }
                </div>
                <div className="row">
                    <div className="col-sm-offset-4 col-sm-10 col-lg-offet-4 col-lg-10">
                        <Button label={constants.ADD} raised primary onClick={this.handleSubmit} disabled={!this.state.formValid1||!this.state.formValid2||!this.state.formValid3||!this.state.formValid4}/>
                        <Button label={constants.CANCEL} className={theme.cancel} onClick={this.handleToggleAction} />
                    </div>
                </div>
            </div>

            {this.state.flag ?   <Modal message={this.state.message} active={true} change={this.onChange} label={"ex"} />:null}


            </Dialog>
        );
    }
}
