import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { imageData } from "../HotelData";

const ImageGallery = () => {
  return (
    <Container className="d-sm-flex" fluid>
      <Row>
        <Col>
          <Image src={imageData[6]} fluid />
        </Col>
        <Col>
          <Image src={imageData[15]} fluid />
        </Col>

        <Col>
          <Image src={imageData[8]} fluid />
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={imageData[9]} fluid />
        </Col>
        <Col>
          <Image src={imageData[10]} fluid />
        </Col>

        <Col>
          <Image src={imageData[11]} fluid />
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={imageData[12]} fluid />
        </Col>
        <Col>
          <Image src={imageData[13]} fluid />
        </Col>

        <Col>
          <Image src={imageData[14]} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageGallery;
