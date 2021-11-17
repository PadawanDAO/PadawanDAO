import React from "react";
import Connect from "../components/Header/Connect";
import { ReactComponent as YourSvg } from "../assets/logos/Padawan.svg";
import "../index.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
} from "../components/Header/NavbarStyles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <YourSvg />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/padawans" activeStyle>
            Padawans
          </NavLink>
          <NavLink to="/proposals" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/donate" activeStyle>
            Donate
          </NavLink>
        </NavMenu>
        <NavBtn>
          <Connect />
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
