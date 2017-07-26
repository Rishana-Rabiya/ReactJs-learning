import React from 'react';
import {Menu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import {Button, IconButton} from 'react-toolbox/lib/button';


export class ButtonMenu extends React.Component {
  state = { active: false };
  handleButtonClick = () => this.setState({ active: !this.state.active });
  handleMenuHide = () => this.setState({ active: false });
  render () {
    return (
      <div style={{ display: 'inline-block', position: 'relative' }}>
        <Button style={{color:'white' }} onClick={this.handleButtonClick} label={this.props.label} />
        <Menu position="topLeft" active={this.state.active} onHide={this.handleMenuHide}>
          {this.props.children}
        </Menu>
      </div>
    );
  }
}
