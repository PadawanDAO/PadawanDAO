import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Tag from "./Tag";
export class Player extends Component {
  render() {
    return (
      <Card style={{ height: "25rem", width: "19rem" }}>
        <Card.Header style={{ height: "7rem", padding: "0" }}>
          <Card.Img
            variant="top"
          />
        </Card.Header>
        <div className="card-body">
          <Card.Body className="text-center">
            <Card.Img
              className="image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SVG_Circle.svg/1024px-SVG_Circle.svg.png"
            />
            <Card.Title>Padawan Name</Card.Title>
          </Card.Body>
        </div>

      <Card.Body>
        <Card.Text>About</Card.Text>
        <Tag />

        <Card.Text>Member of</Card.Text>

        <Card.Text>Skills</Card.Text>
      </Card.Body>


      </Card>
    );
  }
}

export default Player;
