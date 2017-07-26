import React from 'react';
import { Home } from './Home';
import { MainHeader } from './MainHeader';

export class Root extends React.Component {
    render() {

        return (
            <div className = "container-fluid">
                <div className = "row">
                    <MainHeader history={this.props.history}/>
                    <Home/>
                </div>
            </div>
        );
    }
}
