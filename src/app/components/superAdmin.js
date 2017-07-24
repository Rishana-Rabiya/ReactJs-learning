import React from 'react';
import {AdminHeader} from './Header';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Home} from './Home';
import {AddBook} from './AddBook';
import {Modal} from './Modal';
import {constants} from './constants';


export class superAdmin extends React.Component {
    constructor(){
        super();
        this.state={
            loggedIn:true
        }

    }
    componentDidMount(){

        var TOKEN_KEY = 'Token';
        var credentials = JSON.parse(localStorage.getItem(TOKEN_KEY));
        if(!credentials||credentials.type!='admin'){
            this.setState({loggedIn:false});


        }
        else {
            this.setState({loggedIn:true});

        }

    }

    render() {

        return (
            <div>
            <AdminHeader history={this.props.history}/>

            <Switch>
            <Route exact path='/superAdmin' component={Home}/>
            <Route exact path='/superAdmin/addBook' component={AddBook}/>
            </Switch>

            {this.state.loggedIn? null : <Modal title={constants.OOPS} active={true} message={constants.NOT_LOGGED_IN} history={this.props.history}/>}
            </div>

        );
    }
}
