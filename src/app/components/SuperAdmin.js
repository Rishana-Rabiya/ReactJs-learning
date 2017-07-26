import React from 'react';
import {AdminHeader} from './AdminHeader';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Home} from './Home';
import {AddBook} from './AddBook';
import {BookDisableEnable} from './BookDisableEnable';
import {Modal} from './Modal';
import {constants} from '../common/constants';
import {retrieveObject} from '../common/localStorage';


export class SuperAdmin extends React.Component {
    constructor(){
        super();
        this.state={
            loggedIn:true
        }
    }


    componentDidMount(){
        const TOKEN_KEY = 'Token';
        var credentials = retrieveObject(TOKEN_KEY);
        console.log("credential",credentials);
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
                    <Route exact path='/superAdmin/disEnBook/:id' component={BookDisableEnable}/>
                </Switch>
                {this.state.loggedIn? null : <Modal title={constants.OOPS} active={true} message={constants.NOT_LOGGED_IN} history={this.props.history}/>}
            </div>
        );

    }
}
