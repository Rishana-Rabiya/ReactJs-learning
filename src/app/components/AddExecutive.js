import React from 'react';

export class AddExecutive extends React.Component {
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
    render() {

        return (
            <Dialog

            active={this.state.active}
            onEscKeyDown={this.handleToggle}
            onOverlayClick={this.handleToggle}
            title={this.props.title}


            >
            <p > Add me </p>

            </Dialog>
        );
    }
}
