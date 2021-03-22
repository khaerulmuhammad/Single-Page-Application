import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../component/BackComponent";

export default class DetailPlayerContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>detail player</h1>
      </Container>
    );
  }
}
