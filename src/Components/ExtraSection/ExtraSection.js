import React from "react";
import { Col, Row } from "react-bootstrap";
import extra from "./extra.jpg";
const ExtraSection = () => {
  return (
    <div>
      <h1 className="text-center p-5">Buy Your Favourite Bikes</h1>
      <Row className="container">
        <Col md={6}>
          <img
            style={{ borderRadius: "40px" }}
            className="img-fluid"
            src={extra}
            alt=""
          />
        </Col>
        <Col md={6}>
          <h4 className="mt-5">
            “A motorcycle is like a drug but it doesn’t clog your arteries,
            impair your brain function, or send you to a rehabilitation centre.
            Plus, it’s completely legal (if you have a licence).” Yeah, that was
            my creation haha.
          </h4>
        </Col>
      </Row>
    </div>
  );
};

export default ExtraSection;
