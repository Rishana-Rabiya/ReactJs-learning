import React from "react";
import { AppBar } from 'react-toolbox/lib/app_bar';
import theme from './style.css';
import Link from 'react-toolbox/lib/link';
import Navigation from 'react-toolbox/lib/navigation';
import { Login } from './Login';


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
