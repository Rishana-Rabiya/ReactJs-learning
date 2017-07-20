import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Home';
import { Header } from './components/Header';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink : "Home"
        }
    }
    onChangeLink(newName){
        this.setState({
            homeLink : newName
        });
    }

    onGreet(){
        alert("heyya");
    }


    render() {
        return (
            <div className = "container-fluid">
                <div className = "row">

                <Header home = {this.state.homeLink}/>
                    <div className="col-sm-6">
                        <h1> Hello </h1>
                        <Home name = {"rishana"} intialAge = {20} alert = {this.onGreet} changeLink={this.onChangeLink.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
