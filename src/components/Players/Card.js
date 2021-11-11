import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class Player extends Component {
  render() {
    return (
      
        <Card style={{height: "25rem", width: "19rem" }}>

        <Card.Header style={{height: "7rem", padding: "0"}}>
        <Card.Img variant="top"  src="https://pbs.twimg.com/media/DTwnS_zVMAAZLMe.jpg:large" />
      
        </Card.Header>
        <div className="card-body">
        <Card.Body className="text-center" >
        <Card.Img  className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SVG_Circle.svg/1024px-SVG_Circle.svg.png" />
        <Card.Title>Padawan Name</Card.Title>
        </Card.Body>  
        </div>
        

           
          
        </Card>
      
    );
  }
}

export default Player;
