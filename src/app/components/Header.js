import React from "react";
import { AppBar } from 'react-toolbox/lib/app_bar';
import theme from './style.css';
import Navigation from 'react-toolbox/lib/navigation';
import Button from 'react-toolbox/lib/button';
import { Logout } from './Logout';
import { Login } from './Login';
import { Link} from 'react-router-dom';
import {constants} from './constants';
import {AddExecutive} from './AddExecutive';



export class Header extends React.Component {
    render() {
        return (
            <AppBar theme={theme}  >

                <Navigation type='horizontal' theme={theme}>
                <Login history={this.props.history}/>
                </Navigation>
            </AppBar>




        );
    }

}
export class AdminHeader extends React.Component {
    constructor(){
        super();
        this.state = {
        loggedIn:true
        };
    }
        logout =()=> {
            Logout(this.props.history);

        };
    render() {
        return (
            <AppBar theme={theme}>



                <ul className="nav navbar-nav">
                 <li><Link to='/superAdmin'>{constants.HOME}</Link></li>
                 <li className="dropdown">
                   <a className="dropdown-toggle" data-toggle="dropdown" href="#">{constants.ADD}
                   <span className="caret"></span></a>
                   <ul className="dropdown-menu">
                   <li><a>{constants.CATEGORY}</a></li>
                     <li><Link to='/superAdmin/addBook'>{constants.BOOK}</Link></li>
                     <li><a>{constants.EX_USER}</a></li>
                   </ul>
                 </li>
                 <li className="dropdown">
                   <a className="dropdown-toggle" data-toggle="dropdown" href="#">{constants.DELETE}
                   <span className="caret"></span></a>
                   <ul className="dropdown-menu">
                     <li><a >{constants.BOOK}</a></li>
                     <li><a >{constants.CATEGORY}</a></li>

                   </ul>
                 </li>
                 <li className="dropdown">
                   <a className="dropdown-toggle" data-toggle="dropdown" href="#">{constants.EDIT}
                   <span className="caret"></span></a>
                   <ul className="dropdown-menu">
                     <li><a>{constants.BOOK}</a></li>
                     <li><a>{constants.CATEGORY}</a></li>
                   </ul>
                 </li>
                 <li className="dropdown">
                   <a className="dropdown-toggle" data-toggle="dropdown" href="#">{constants.DISABLE}
                   <span className="caret"></span></a>
                   <ul className="dropdown-menu">
                     <li><a>{constants.BOOK}</a></li>
                     <li><a>{constants.CATEGORY}</a></li>
                    <li><a>{constants.USER}</a></li>
                   </ul>
                 </li>
                 <li className="dropdown">
                   <a className="dropdown-toggle" data-toggle="dropdown" href="#">{constants.ENABLE}
                   <span className="caret"></span></a>
                   <ul className="dropdown-menu">
                     <li><a>{constants.BOOK}</a></li>
                     <li><a>{constants.CATEGORY}</a></li>
                     <li><a>{constants.USER}</a></li>
                   </ul>
                 </li>


               </ul>
                    <div style={{position:'relative',left:'600px'}}>
                 <span style={{color:'grey'}}> Welcome Admin </span>
                   <Button label={constants.LOGOUT} onClick={this.logout} icon="exit_to_app" inverse></Button>
                   </div>



            </AppBar>




        );
    }

}
