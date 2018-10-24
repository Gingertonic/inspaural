import React from 'react';
import { NavLink } from 'react-router-dom';

const InnerNav = props => {
  return (
    <div className="nav-bar">
     <NavLink to='/ambiences' exact>Ambiences</NavLink>
     <a href="/" onClick={e => props.saveInspaural(e, 0, 0, 0, 0)}>Save</a>

     <NavLink to='/mixer' exact>Mixer</NavLink>
    </div>
  )
}

export default InnerNav
