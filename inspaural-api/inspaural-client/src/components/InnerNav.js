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

  render() {

    return (
      <div className="nav-bar">
       <NavLink to='/ambiences' exact>Ambiences</NavLink>
         <div>
           <Button onClick={this.handleOpen}>Save</Button>
           <SaveModal openState={this.state.open} handleClose={this.handleClose} save={this.props.saveInspaural}/>
         </div>
         <NavLink to="/mixer" exact><div onClick={this.props.saveInspaural}>Save</div></NavLink>
       <NavLink to='/mixer' exact>Mixer</NavLink>
      </div>

    );
  }
}

export default InnerNav;
