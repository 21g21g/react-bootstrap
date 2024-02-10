import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { imageData } from "../../HotelData";
import "./Favourite.css";

const Favourite = () => {
  return (
    <Container className="mt-5 background" fluid>
      <h1 className="text-center">Our favourites</h1>
      <Row>
        <Col>
          <h1>Foods</h1>
          <h3>
            Breakfast <span>50</span>
          </h3>
          <h3>
            Lunch <span>60</span>
          </h3>
          <h3>
            Dinner <span>50</span>
          </h3>
        </Col>
        <Col>
          <h1>Drinks</h1>
          <h3>
            Beer <span>233</span>
          </h3>
          <h3>
            Areke <span>23</span>
          </h3>
          <h3>
            Tela <span>233</span>
          </h3>
        </Col>
      </Row>
      <Button className="btn btn-primary text-center ml-7">
        Our Full Menu
      </Button>
    </Container>
  );
};

export default Favourite;
