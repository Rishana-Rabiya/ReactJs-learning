import React from "react";
import { AppBar } from 'react-toolbox/lib/app_bar';
import theme from '../styles/style.css';
import Navigation from 'react-toolbox/lib/navigation';
import { Login } from './Login';



export class MainHeader extends React.Component {
    render() {
        return (
            <AppBar theme={theme}  fixed>
                <Navigation type='horizontal' theme={theme}>
                <Login history={this.props.history}/>
                </Navigation>
            </AppBar>
        );
    }

}
