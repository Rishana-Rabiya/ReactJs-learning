import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import theme from './style.css';

export class Modal extends React.Component {
    constructor(props){
        super();
        this.state = {
        active:false
        };

    }
    componentDidMount(){
        this.handleToggle();
    }


    handleToggle = () => {
        this.setState({active: !this.state.active});
    }

    actions = [{ label: "OK", onClick: this.handleToggle }];

    render() {

        return (

            <Dialog
            actions={this.actions}
            active={this.state.active}
            onEscKeyDown={this.handleToggle}
            onOverlayClick={this.handleToggle}
            title={this.props.title}
            

            >
            <p style={{color:'red',fontWeight:'bold'}}> <strong>{this.props.message}</strong></p>
            </Dialog>
        );
    }
}
