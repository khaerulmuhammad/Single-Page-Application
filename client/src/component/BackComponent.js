import React from "react";
import { Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";

export const BackComponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to={"/"}>
          <Button color="dark">Back</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponent;
