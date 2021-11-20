import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const Tag = styled.div`
  background-color: black;
  color: white;
  font-size: 14px;
  display: inline;
  width: auto;
  padding: 4px 5px;
  border-radius: 5px;
  margin: 10px 5px;
`;

export class Player extends Component {
  render() {
    return (
      <Card
        style={{
          height: "31rem",
          width: "20rem",
          padding: "0%",
          margin: "1rem",
        }}
      >
        <Card.Header style={{ height: "auto", padding: "0" }}>
          <Card.Img
            variant="top"
            style={{ height: "5rem" }}
            src="https://image.shutterstock.com/image-photo/grunge-spaceship-interior-black-background-260nw-1210128169.jpg"
          />
        </Card.Header>
        <div className="card-body">
          <Card.Body style={{ textAlign: "center", padding: "0%" }}>
            <Card.Img
              className="image"
              src="https://www.coachcarson.com/wp-content/uploads/2018/09/Chad-Profile-pic-circle.png"
            />
          </Card.Body>
          <Card.Title style={{ textAlign: "center", marginTop: "-10%" }}>
            Padawan Name
          </Card.Title>
          <Card.Text
            style={{
              color: "red",
              fontSize: "10px",
              textAlign: "center",
              marginTop: "-5%",
            }}
          >
            EST (GMT -5:00)
          </Card.Text>
          <div style={{marginBottom:"20px"}}>
            <Tag>Lisbon Padawan</Tag>
            <Tag>Core Team</Tag>
          </div>
        </div>

        <Card.Body style={{ marginTop: "-20%" }}>
          <Card.Text>
            <b>About</b>
          </Card.Text>
          <p style={{ marginTop: "-7%" }}>
            Lng elit ut aliquam, purus sit amet luctus venenatis, lectus magna
            fringilla urna, porttitor rhoncus dolor purus non enim praesent
            elementum facilisis{" "}
          </p>
          <Card.Text>
            <b>Skills</b>
          </Card.Text>

          <div style={{ paddingBottom: "10px", marginLeft: "-5px" }}>
            <Tag>React</Tag>
            <Tag>Figma</Tag>
            <Tag>Solidity</Tag>
          </div>

          <Card.Text>
            <b>Socials</b>
          </Card.Text>

          <div style={{ paddingBottom: "10px", marginLeft: "-5px" }}>
            <Tag>Twitter</Tag>
            <Tag>Metamask</Tag>
            <Tag>Discord</Tag>
            <Tag>Redit</Tag>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Player;
