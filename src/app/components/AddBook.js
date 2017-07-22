import React from 'react';
import Input from 'react-toolbox/lib/input';
import Dropdown from 'react-toolbox/lib/dropdown';
import {Button, IconButton} from 'react-toolbox/lib/button';
import theme from './style.css';
export class AddBook extends React.Component {
    constructor(){
        super();

        this.state = {

        isbn: '',
        title:'',
        aname:'',
        cat:'',
        ryear:'',
        stack:'',
        ed:''
      };
      }
      category = [
    { value: 'EN-gb', label: 'England' },
    { value: 'ES-es', label: 'Spain'},
    { value: 'TH-th', label: 'Thailand', disabled: true },
    { value: 'EN-en', label: 'USA'}];


    handleChange = (name, value) => {
        this.setState({...this.state, [name]: value});
      };

    render(){
        return(
            <div className="container">
                <div className ={theme.outline}>
                    <div className="row">
                        <div className="col col-sm-12 col-offset-3">
                            <Input type='text' label='Enter the isbn of the book:'  className={theme.input} value={this.state.isbn} onChange={this.handleChange.bind(this, 'isbn')} />
                            <Input type='text' label='Enter the Title of the book:' className={theme.input} />
                            <Input type='text' label='Enter the name of the authors of the book:'  className={theme.input} />
                            <Input type='text' label='Enter the Publisher Name of the book:'  className={theme.input} />
                            <Input type='text' label='Enter the stack id:'  className={theme.input} />
                            <Input type='text' label='Enter the edition of the book:'  className={theme.input} />
                            <Dropdown auto={false} source={this.category} label='Choose the Category' className={theme.input}/>
                            <Button  label='Create' raised primary className={theme.add} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
