import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import BackComponent from "../component/BackComponent";

const CreatePlayerContainer = () => {
  return (
    <Container>
      <BackComponent />
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
        </FormGroup>

        <Button className="bg-danger">Submit </Button>
      </Form>
    </Container>
  );
};

export default CreatePlayerContainer;
