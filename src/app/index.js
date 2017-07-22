import React from 'react';
import { render } from 'react-dom';
import {Root} from './components/Root'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Home } from './components/Home';
import { superAdmin } from './components/superAdmin';
import { User } from './components/user';
import { ExecutiveUser } from './components/ExecutiveUser';
import history from './components/history';



class App extends React.Component {


    render() {
        return (

        <Router history={history}>
        <div>

                <Route exact path='/'component={Root}/>
                <Route path='/superAdmin' component={superAdmin}/>
                <Route path='/user' component={User}/>


        </div>

        </Router>

        );
    }
}

render(<App/>, window.document.getElementById("app"));
