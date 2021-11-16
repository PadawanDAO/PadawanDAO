import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav `
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

`;

export const NavLink = styled(Link)
`
  color: #fff;
  display: flex;
  align-items: center;
  font-family: Exo;
font-style: normal;
font-weight: 800;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #FAE04B;
    text-decoration: none;
  }
 
  &.active {
    color: #FAE04B;
  }
`;

export const Bars = styled(FaBars)
`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div `
  display: flex;
  align-items: center;

  /* Second Nav */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav `
  display: flex;
  align-items: center;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)
`
background: #FAE04B;
border-radius: 15px;
  padding: 10px 22px;
  font-family: Exo;
font-style: normal;
font-weight: 800;
color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: none;
    outline: #FAE04B 3px solid;
    color: #fff;
  }
`;