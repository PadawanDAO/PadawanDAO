import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Tag from "./Tag";

export class Player extends Component {
  render() {
    return (
      <Card style={{ height: "auto", width: "19rem" }}>
        <Card.Header style={{ height: "4rem", padding: "0" }}>
          <Card.Img
            variant="top"
            src="https://pbs.twimg.com/media/DTwnS_zVMAAZLMe.jpg:large"
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
        <p>loorem Ipsum is simply dummy text of the printing and typesetting
              industry.  an u </p>

        <Card.Text>Member of</Card.Text>

        <Tag>PadawanDAO</Tag>
        <Tag>Metacartel</Tag>
        
        <Tag>TKS</Tag>

        <Card.Text>Skills</Card.Text>

        
        <Tag>React</Tag>
        <Tag>Figma</Tag>
        <Tag>Vue.js</Tag>
        <Tag>Python</Tag>

      </Card.Body>


      </Card>
    );
  }
}

export default Player;
