import React from 'react';
import { render } from 'react-dom';
import {Root} from './components/Root'
import {Router, Route, browserHistory} from "react-router";
import { Home } from './components/Home';
import { User } from './components/user';


class App extends React.Component {


    render() {
        return (
            <div className = "container-fluid">
                <div className = "row">

                <Root/>


                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
