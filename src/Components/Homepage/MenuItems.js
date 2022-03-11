import React from 'react';
import { NavLink } from 'react-router-dom';
import {useUserAuth} from '../../context/AuthContext';

function MenuItems() {

  const {user} = useUserAuth();

  return (
    <nav className='menu-items'>
          <NavLink to='/collections'>Collections</NavLink>
          <NavLink to='/men'>Men</NavLink>
          <NavLink to='/women'>Women</NavLink>
          <NavLink to='/boy'>Boy</NavLink>
          <NavLink to='/girl'>Girl</NavLink>
          {!user && (
          <NavLink to='/signup'>Sign Up</NavLink>
          )}
          
    </nav>
  )
}

export default MenuItems;