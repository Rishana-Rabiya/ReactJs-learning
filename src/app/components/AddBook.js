import React from 'react';
import Input from 'react-toolbox/lib/input';
import Dropdown from 'react-toolbox/lib/dropdown';
import {Button, IconButton} from 'react-toolbox/lib/button';
import theme from './style.css';
import {constants} from './constants';
import {Modal} from './Modal';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import history from './history';

export class AddBook extends React.Component {
    constructor(){
        super();

        this.state = {

        isbn: '',
        title:'',
        aname:'',
        cat:'',
        ryear:'',
        stack:'',
        ed:'',
        pub:'',
        category:[],
        success: false,
        stackValid:true,
        isbnValid:true,
        titleValid:true,
        authorValid:true,
        catValid:true,
        formValid1:false,
        formValid2:false,
        formValid3:false,
        formValid4:false,
        formValid5:false,
        done:false


      };
      }
      componentDidMount(){
          const TOKEN_KEY = 'Token';
          var credentials = JSON.parse(localStorage.getItem(TOKEN_KEY));
          var token = credentials.token;
          fetch('https://localhost:3443/category/find',{headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-access-token': token
          }}).then((response)=>{
                  return response.json();
                }).then((response)=>{
                    var cat = [];
                    var categories = response.message;
                    categories.forEach((element)=>{
                        var data = {
                         value:element.CategoryName,
                        label:element.CategoryName
                      }
                     cat.push(data);
                     this.setState({category:cat});
                  });
              });
      }




    handleChange = (name, value) => {

        this.setState({...this.state, [name]: value});



        if(name==="isbn"&& !value){
           this.setState({
           isbnValid : false,
       formValid1:false});

       }
       else if(name==="isbn"&&value){
           this.setState({
           isbnValid : true,
           formValid1:true

       });

       }
       else if(name==="title"&& !value){
          this.setState({
          titleValid : false,formValid2:false});
          console.log("it is required");
      }
      else if(name==="title"&&value){
          this.setState({
          titleValid : true,
       formValid2:true});

      }
      else if(name==="stack"&& !value){
         this.setState({
         stackValid : false,formValid3:false});
         console.log("it is required");
      }
      else if(name==="stack"&&value){
         this.setState({
        stackValid : true,
     formValid3:true});

      }
      else if(name==="aname"&& !value){
         this.setState({
         authorValid : false,formValid4:false});
         console.log("it is required");
      }
      else if(name==="aname"&&value){
         this.setState({
        authorValid : true,
     formValid4:true});

      }
      else if(name==="cat"&& !value){
         this.setState({
         catValid : false,formValid5:false});
         console.log("it is required");
      }
      else if(name==="cat"&&value){
         this.setState({
        catValid : true,
     formValid5:true});

      }


    };

    //create book
    create=()=>{
    const TOKEN_KEY = 'Token';
    var credentials = JSON.parse(localStorage.getItem(TOKEN_KEY));
    var token = credentials.token;
    fetch('https://localhost:3443/books/upload', {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
            "Content-Type": "application/json",
            'x-access-token': token
        },
        credentials: "same-origin"
    }).then((response)=>{
        return response.json();

 }).then((data)=>{
     this.setState ( {

     isbn: '',
     title:'',
     aname:'',
     cat:'',
     ryear:'',
     stack:'',
     ed:'',
     pub:'',
     stackValid:true,
     isbnValid:true,
     titleValid:true,
     authorValid:true,
     catValid:true,
     formValid1:false,
     formValid2:false,
     formValid3:false,
     formValid4:false,
     formValid5:false,
     done:true


 });

     if(data.success){
         console.log(this.state.success,this.state.done);
         this.setState({success:true,done:true});
     }
     else{
         this.setState({success:false,done:true});
     }
 });

}
onChange(){
    this.setState({success:false,done:false});
}



    render(){
        return(

            <div className="container">
                <div className ={theme.outline}>
                    <div className="row">
                        <div className="col col-sm-12 col-offset-3">

                            <Input type='text' label={constants.ISBN}  className={theme.input} value={this.state.isbn} onChange={this.handleChange.bind(this, 'isbn')} />
                            { this.state.isbnValid ? null : <span> Isbn is required </span> }
                            <Input type='text' label={constants.TITLE} className={theme.input}  value={this.state.title} onChange={this.handleChange.bind(this, 'title')} />
                            { this.state.titleValid ? null : <span> Title is required </span> }
                            <Input type='text' label={constants.AUTHORS}  className={theme.input} value={this.state.aname} onChange={this.handleChange.bind(this, 'aname')}/>
                            { this.state.authorValid ? null : <span> Author Name is required </span> }
                            <Input type='text' label={constants.REALEASE_YEAR} className={theme.input} value={this.state.ryear} onChange={this.handleChange.bind(this, 'ryear')}/>
                            <Input type='text' label={constants.PUBLISHER}  className={theme.input} value={this.state.pub} onChange={this.handleChange.bind(this, 'pub')} />
                            <Input type='text' label={constants.EDITION} className={theme.input} value={this.state.ed} onChange={this.handleChange.bind(this, 'ed')}/>
                            <Dropdown auto={false} source={this.state.category} label={constants.CHOOSE_CAT} className={theme.input} value={this.state.cat} onChange={this.handleChange.bind(this,'cat')}/>
                            { this.state.catValid ? null : <span> Category is Required </span> }
                            <Input type='text' label={constants.STACK}  className={theme.input} value={this.state.stack} onChange={this.handleChange.bind(this, 'stack')}/>
                            { this.state.stackValid ? null : <span> Stack Id is required </span> }

                        </div>
                    </div>
                    <div className="row">
                        <Button  label={constants.ADD} raised primary className={theme.add} onClick={this.create} disabled={!this.state.formValid1||!this.state.formValid2||!this.state.formValid3||!this.state.formValid4||!this.state.formValid5}/>
                    </div>
                </div>

                {this.state.success&&this.state.done ? <Modal label={"book"} message={constants.BOOK_CREATE_SUCCESS} active={true} change={this.onChange.bind(this)}/>:null}
                {!this.state.success&&this.state.done ? <Modal label={"book"} message={constants.BOOK_CREATE_FAILURE} active={true}  />:null}



            </div>
        );
    }
}
