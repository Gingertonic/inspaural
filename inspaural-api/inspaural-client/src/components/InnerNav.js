import React from 'react';
import { NavLink } from 'react-router-dom';

const InnerNav = props => {
  return (
    <div className="nav-bar">
     <NavLink to='/ambiences' exact>Ambiences</NavLink>
     <NavLink to="/my-inspaurals" exact onClick={props.saveInspaural}>Save</NavLink>
     <NavLink to='/mixer' exact>Mixer</NavLink>
    </div>
  )
}

export default InnerNav
