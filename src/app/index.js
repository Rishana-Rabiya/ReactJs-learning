import React from 'react';
import { render } from 'react-dom';
import {Root} from './components/Root'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Home } from './components/Home';
import { SuperAdmin } from './components/SuperAdmin';
import { User } from './components/User';
import { ExecutiveUser } from './components/ExecutiveUser';
import history from './common/history';


class Main extends React.Component {
    render() {
        return (

            <Router history={history}>
                <div>
                    <Route exact path='/'component={Root}/>
                    <Route path='/superAdmin' component={SuperAdmin}/>
                    <Route path='/user' component={User}/>
                </div>
            </Router>
        );
    }
}
render(<Main/>, window.document.getElementById("app"));
