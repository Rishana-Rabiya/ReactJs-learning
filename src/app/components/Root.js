import React from 'react';
import { Home } from './Home';
import { Header } from './Header';
export class Root extends React.Component {
    render() {
        return (
            <div className = "container-fluid">
                <div className = "row">
                <Header/>
                <Home/>
                </div>
            </div>
        );
    }
}
