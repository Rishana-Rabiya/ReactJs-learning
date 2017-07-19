import React from 'react';
export class Home extends React.Component {
    constructor(props){
        super();
        this.state ={
            age:props.intialAge,
            status :0
        }
    }
    makeMeOlder() {
        this.setState({
            age : this.state.age + 3
        });
    }




    render(){


        return(
            <div>
                <p> hello {this.props.name} </p>
                <p> your age is {this.state.age} </p>
                <p> The unchanged status : {this.state.status} </p>
                <hr/>
                <button className="btn btn-primary" onClick ={() => this.makeMeOlder() }>Make me older </button>
            </div>
        );
    }
}
