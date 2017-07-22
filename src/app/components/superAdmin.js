import React from 'react';
import {AdminHeader} from './Header';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Home} from './Home';
import {AddBook} from './AddBook';

export class superAdmin extends React.Component {


        render() {
        return (

                        <div>
                        <AdminHeader/>
                        <Switch>
                        <Route exact path='/superAdmin' component={Home}/>
                        <Route exact path='/superAdmin/add/book' component={AddBook}/>
                        </Switch>
                        </div>

        );
    }
}
