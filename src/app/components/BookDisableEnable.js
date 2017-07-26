import React from 'react';
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table';
import Tooltip from 'react-toolbox/lib/tooltip';
const TooltipCell = Tooltip(TableCell);
import {Button, IconButton} from 'react-toolbox/lib/button';
import {constants} from '../common/constants';

export class BookDisableEnable extends React.Component {


     constructor(props){
         super();
         this.state = {
        selected:[], source: []

         };

     }
//getting all the available books
    componentDidMount=()=>{
        const TOKEN_KEY = 'Token';
        var credentials = JSON.parse(localStorage.getItem(TOKEN_KEY));
        var token = credentials.token;
        }
     handleNotAvailable=()=>{
         this.setState({flag:"not available"})

     }
        render() {

            return (
                <Table selectable onRowSelect={this.change} style= {{ marginTop: 100 }}>
                    <TableHead displaySelect={false}>
                            <TableCell>BOOK_ID</TableCell>
                            <TableCell>BOOK NAME</TableCell>
                            <TableCell>ISBN</TableCell>
                            <TableCell>ACTION</TableCell>
                    </TableHead>
                    {this.state.source.map((item,index) => (
                        <TableRow key={item._id}>
                        <TableCell string>{item.book_id}</TableCell>
                        <TableCell string>{item.Book_Name}</TableCell>
                        <TableCell string>{item.isbn}</TableCell>
                        <TableCell string><Button label={constants.DISABLE} raised primary onClick={this.handleDisable}/></TableCell>
                        </TableRow>
                    ))}
                </Table>

             );
    }
}
