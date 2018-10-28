import React from 'react';
import SaveModal from './SaveModal'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { updateInspauralName } from '../actions/inspaural_actions'



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
    this.props.updateInspauralName(name)
  }

  render() {

    return (
      <div className="nav-bar">
       <NavLink to='/ambiences' exact>Ambiences</NavLink>
       <NavLink to='/mixer' exact onClick={this.handleOpen}>Save</NavLink>
         <SaveModal openState={this.state.open} handleClose={this.handleClose} handleSave={this.handleSave} name={this.props.name} updateName={this.props.updateInspauralName}/>
       <NavLink to='/mixer' exact>Mixer</NavLink>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.currentInspaural.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateInspauralName: name => dispatch(updateInspauralName(name)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InnerNav);
