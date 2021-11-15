import React from 'react';
import { ReactComponent as YourSvg } from './Padawan.svg';
import "../index.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <YourSvg />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/players' activeStyle>
            Padawans
          </NavLink>
          <NavLink to='/proposals' activeStyle>
            Projects
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Connect Wallet</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;