import React from 'react';
import {AddBook} from './AddBook';
export class Main extends React.Component {



    render(){


        return(
            <div>
                <Route path='/add/book' component={AddBook}/>


            </div>
        );
    }
}
