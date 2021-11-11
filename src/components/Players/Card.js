import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class Player extends Component {
  render() {
    return (
      <div className="card">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Padawan Card</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Player;
