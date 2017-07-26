import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';
import {constants} from '../common/constants';
import theme from '../styles/style.css';
import {Modal} from './Modal';
import {post} from '../common/fetch';

export class AddCategory extends React.Component {
    constructor(props){
        super();
        this.state = {
        name:'',
        catValid:true,
        formValid:false,
        flag:false,
        message:'',
        active:false

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
        if(name==="name"&& !value){
            this.setState({
                catValid : false,
                formValid:false
            });
        }
        else if(name==="name"&&value){
            this.setState({
                catValid : true,formValid:true
            });
        }
    };

 handleSubmit=()=>{
     console.log("here inside the submit");
     post('category/create',this.state,(data)=>{
         this.setState({flag:true});
         if(data.flag=="exist"){
             this.setState({message:constants.ADD_CAT_EXIST})
         }
         else {
             this.setState({message:constants.ADD_CAT_SUCCESS})
         }
     });
 }
 handleToggleAction=()=>{
     this.props.change();
 }


 onChange=()=>{
     this.setState ({
         name:'',
         flag:false,
         message:'',
         formValid:false,
         catValid:true
     });
 }


    render() {

        return (
            <Dialog
            active={this.state.active}
            onEscKeyDown={this.handleToggleAction}
            onOverlayClick={this.handleToggleAction}
            title={this.props.title}
            className={theme.dialog}
            >
                <Input type='text' label={constants.CATEGORY_NAME}  value={this.state.name} onChange={this.handleChange.bind(this, 'name')}/>
                { this.state.catValid ? null : <span> {constants.REQUIRED_CATEGORY} </span> }
                <Button label={constants.ADD} raised primary onClick={this.handleSubmit} disabled={!this.state.formValid}/>
                <Button label={constants.CANCEL} className={theme.cancel} onClick={this.handleToggleAction} />
                {this.state.flag ?   <Modal message={this.state.message} active={true} change={this.onChange} label={"ex"} />:null}
            </Dialog>
        );
    }
}
