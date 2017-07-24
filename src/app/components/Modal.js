import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import theme from './style.css';
import {constants} from './constants';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {AddBook} from './AddBook';

export class Modal extends React.Component {
    constructor(props){
        super();
        this.state = {
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
    handleToggleAction = () => {
        this.setState({active: !this.state.active});

        if(this.props.title==constants.OOPS){
           this.props.history.push('/');
        }
        else if(this.props.label=="book"||this.props.label=="ex") {
            console.log("here inside the book");
            this.props.change();


        }

    }



    actions = [{ label: constants.OK, onClick: this.handleToggleAction }];

    render() {

        return (


            <Dialog
            actions={this.actions}
            active={this.state.active}
            onEscKeyDown={this.handleToggleAction}
            onOverlayClick={this.handleToggleAction}
            title={this.props.title}


            >
            <p style={{color:'red',fontWeight:'bold'}}> <strong>{this.props.message}</strong></p>

            </Dialog>


        );
    }
}
