import React from 'react';
import { NavLink } from 'react-router-dom';

const InnerNav = props => {
  return (
    <div className="nav-bar">
     <NavLink to='/ambiences' exact>Ambiences</NavLink>
     <NavLink to="/mixer" exact><div onClick={props.saveInspaural}>Save</div></NavLink>
     <NavLink to='/mixer' exact>Mixer</NavLink>
    </div>
  )
}

export default InnerNav
