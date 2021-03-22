import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../component/BackComponent";

export default class EditPlayerContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Edit Player</h1>
      </Container>
    );
  }
}
