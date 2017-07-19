import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Home';

class App extends React.Component {

    render() {
        return (
            <div className = "container-fluid">
                <div className = "row">
                    <div className="col-sm-6">
                        <h1> Hello </h1>
                        <Home name = {"rishana"} intialAge = {20}/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
