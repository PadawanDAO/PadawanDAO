import React, { Component } from "react";
// import styled from "styled-components";

import {   
  NavBtnLink
} from './NavbarStyles';

export class Connect extends Component {
  render() {
    return (
        <NavBtnLink to='/signin'>Connect Wallet</NavBtnLink>
    );
  }
}

export default Connect;
