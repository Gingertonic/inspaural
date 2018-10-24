import React from 'react';
import { NavLink } from 'react-router-dom';

const InnerNav = () => {
  return (
    <div className="nav-bar">
     <NavLink to='/ambiences' exact>Ambiences</NavLink>
     <a href="/">Save</a>

     <NavLink to='/mixer' exact>Mixer</NavLink>
    </div>
  )
}

export default InnerNav
