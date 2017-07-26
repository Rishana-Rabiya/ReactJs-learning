import React from "react";
import { AppBar } from 'react-toolbox/lib/app_bar';
import theme from '../styles/style.css';
import Navigation from 'react-toolbox/lib/navigation';
import Button from 'react-toolbox/lib/button';
import { Logout } from './Logout';
import { Login } from './Login';
import { Link} from 'react-router-dom';
import {constants} from '../common/constants';
import {AddExecutive} from './AddExecutive';
import {AddCategory} from './CreateCategory';
import {IconMenu, MenuItem,Menu } from 'react-toolbox/lib/menu';
import {ButtonMenu} from './ButtonMenu';



export class AdminHeader extends React.Component {
    constructor(){
        super();
        this.state = {
        loggedIn:true,
        addEx : false,
        addCat : false
        };
    }
    logout =()=> {
        Logout(this.props.history);
    };
    addExecutive=()=>{
        this.props.history.push('/superAdmin');
        this.setState({addEx:true});
    }
    addCategory=()=>{
        this.props.history.push('/superAdmin');
        this.setState({addCat:true});
    }
    againAdd=()=>{
        this.setState({addEx:false,addCat:false});
    }
    render() {
        return (
            <AppBar theme={theme} fixed rightIcon="exit_to_app" onRightIconClick={this.logout} >
                <div className="container">
                    <div className = "row" >
                        <div className="col-xs-9 col-lg-9 col-sm-10 col-md-9 ">
                            <Link to='/superAdmin'><Button label ="Home" style={{color:'white'}}></Button></Link>
                            <ButtonMenu label={constants.ADD}>
                                <MenuItem caption={constants.CATEGORY} onClick={this.addCategory}/>
                                <Link to='/superAdmin/addBook' style={{ textDecoration: 'none' }}><MenuItem caption={constants.BOOK}/></Link>
                                <MenuItem caption={constants.EX_USER} onClick={this.addExecutive}/>
                            </ButtonMenu >
                            <ButtonMenu label={constants.DISABLE}>
                                <MenuItem caption={constants.CATEGORY}/>
                                <MenuItem caption={constants.BOOK}/>
                            </ButtonMenu>
                            <ButtonMenu label={constants.EDIT}>
                                <MenuItem caption={constants.CATEGORY}/>
                                <MenuItem caption={constants.BOOK}/>
                            </ButtonMenu>
                        </div>
                        <div className="col-xs-3 col-lg-3 col-sm-2 col-md-2">
                            <Button label="Welcome Admin" style={{textTransform:"none"}}inverse/>

                        </div>
                     </div>
                </div>
                {this.state.addEx? <AddExecutive title={constants.CREATE_EX} change={this.againAdd}/> :null }
                {this.state.addCat? <AddCategory title={constants.CAT_CREATE}  change={this.againAdd}/> :null }
            </AppBar>
        );
    }

}
