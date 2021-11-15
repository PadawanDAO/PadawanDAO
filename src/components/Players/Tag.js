import React, { Component } from "react";
import styled from "styled-components";

const Tag1 = styled.div`
  background-color: black;
  color: white;
  font-size: 14px;
  display: inline;
  padding: 4px 5px;
  border-radius: 5px;
  margin: 10px 0px;
`;

export class Tag extends Component {
  render() {
    return (
        <Tag1>PadawanDAO</Tag1>
    );
  }
}

export default Tag;
