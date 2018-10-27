import React from 'react';
import SaveModal from './SaveModal'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class InnerNav extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = name => {
    this.handleClose();
    this.props.saveInspaural(name);
  }

  render() {

    return (
      <div className="nav-bar">
       <NavLink to='/ambiences' exact>Ambiences</NavLink>
       <NavLink to='/mixer' exact onClick={this.handleOpen}>Save</NavLink>
         <SaveModal openState={this.state.open} handleClose={this.handleClose} handleSave={this.handleSave}/>
       <NavLink to='/mixer' exact>Mixer</NavLink>
      </div>

    );
  }
}

export default InnerNav;
