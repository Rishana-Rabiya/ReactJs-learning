import React from 'react';
export class Home extends React.Component {
    constructor(props){
        super();
        this.state ={
            age:props.intialAge,
            status :0,
            homeLink : "changed link"
        }
    }
    makeMeOlder() {
        this.setState({
            age : this.state.age + 3
        });
    }
    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }



    render(){


        return(
            <div>
                <hr/>
                <h2> passing values from the parent to the child using props </h2>
                <p> hello {this.props.name} </p>
                <hr/>
                <h2> state change </h2>
                <p> your age is {this.state.age} </p>
                <p> The unchanged status : {this.state.status} </p>
                <button className="btn btn-primary" onClick ={() => this.makeMeOlder() }>Make me older </button>
                <hr/>
                <h2> passing a fun from the parent to the child</h2>
                <button className= "btn btn-primary" onClick ={() => this.props.alert() }> Alert </button>
                <hr/>
                <h2> communication between child and the parent </h2>
                <button className= "btn btn-primary" onClick ={this.onChangeLink.bind(this)}> change link </button>


            </div>
        );
    }
}
