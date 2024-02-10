import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { imageData } from "../../HotelData";

const Contact = () => {
  return (
    <Container className="bg-dark mt-2" fluid>
      <Row>
        <Col className="text-white p-5 mt-4">
          <h1>Where to find us</h1>
          <p>infront of amhara astedader block</p>
          <h2>opening hours</h2>
        </Col>
        <Col>
          <Image src={imageData[7]} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
