import React from 'react';
import { Home } from './Home';
import { Header } from './Header';

export class Root extends React.Component {
    render() {
        console.log(this.props.history);
        return (
            <div className = "container-fluid">
                <div className = "row">
                <Header history={this.props.history}/>
                <Home/>
                </div>
            </div>
        );
    }
}
