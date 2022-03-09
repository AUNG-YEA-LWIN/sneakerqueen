import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuItems() {

  return (
    <nav className='menu-items'>
          <NavLink to='/collections'>Collections</NavLink>
          <NavLink to='/men'>Men</NavLink>
          <NavLink to='/women'>Women</NavLink>
          <NavLink to='/boy'>Boy</NavLink>
          <NavLink to='/girl'>Girl</NavLink>
          <NavLink to='/sinup'>Singup</NavLink>
    </nav>
  )
}

export default MenuItems;
