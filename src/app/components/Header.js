import React from "react";
import { AppBar } from 'react-toolbox/lib/app_bar';
import theme from './style.css';

import Navigation from 'react-toolbox/lib/navigation';
import { Login } from './Login';
import { Link} from 'react-router-dom';



export class Header extends React.Component {
    render() {
        return (
            <AppBar theme={theme}  >

                <Navigation type='horizontal' theme={theme}>
                <Login />
                </Navigation>
            </AppBar>




        );
    }

}
export class AdminHeader extends React.Component {
    render() {
        return (
            <AppBar theme={theme}>



                <ul className="nav navbar-nav">
                 <li><Link to='/superAdmin'>Home</Link></li>
                 <li className="dropdown">
                   <a className="dropdown-toggle" data-toggle="dropdown" href="#">Add
                   <span className="caret"></span></a>
                   <ul className="dropdown-menu">
                   <li><a>Category</a></li>
                     <li><Link to='/superAdmin/add/book'>Book</Link></li>
                     <li><a>Executive User</a></li>
                   </ul>
                 </li>
                 <li className="dropdown">
                   <a className="dropdown-toggle" data-toggle="dropdown" href="#">Delete
                   <span className="caret"></span></a>
                   <ul className="dropdown-menu">
                     <li><a >Books</a></li>
                     <li><a >Category</a></li>

                   </ul>
                 </li>
                 <li className="dropdown">
                   <a className="dropdown-toggle" data-toggle="dropdown" href="#">Edit
                   <span className="caret"></span></a>
                   <ul className="dropdown-menu">
                     <li><a>Books</a></li>
                     <li><a>Category</a></li>
                   </ul>
                 </li>
                 <li className="dropdown">
                   <a className="dropdown-toggle" data-toggle="dropdown" href="#">Disable
                   <span className="caret"></span></a>
                   <ul className="dropdown-menu">
                     <li><a>Books</a></li>
                     <li><a>Category</a></li>
                    <li><a>User</a></li>
                   </ul>
                 </li>
                 <li className="dropdown">
                   <a className="dropdown-toggle" data-toggle="dropdown" href="#">Enable
                   <span className="caret"></span></a>
                   <ul className="dropdown-menu">
                     <li><a>Books</a></li>
                     <li><a>Category</a></li>
                     <li><a>User</a></li>
                   </ul>
                 </li>


               </ul>


            </AppBar>




        );
    }

}
