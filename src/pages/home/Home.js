import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { imageData } from "../../HotelData";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Container className=" mt-4">
        <div className="row">
          <div className="col">
            <div className="row">
              {/* <Row> */}
              <h2>Wellcome to</h2>
              <h1>Restourant-menu</h1>
              <Link to="/menu">
                <button className="btn btn-success">our menu</button>
              </Link>
              {/* </Row> */}
            </div>
          </div>
          {/* <Col> */}

          {/* </Col> */}
          <Col>
            {/* <Image
            src="../assets/about-chef1.jpg"
            alt="there is no image "
            fluid
          /> */}
            <Image src={imageData[5]} fluid />
          </Col>
        </div>
      </Container>
      <Container>
        <Row>
          <Col>
            <Image src={imageData[3]} fluid />
          </Col>
          <Col>
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              eleifend leo. Suspendisse potenti. Nulla facilisi. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Integer nec mauris eget purus dignissim fermentum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              eleifend leo. Suspendisse potenti. Nulla facilisi. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Integer nec mauris eget purus dignissim fermentum.
            </p>
            <Button variant="outline-secondary hover-primary">
              More about us
            </Button>{" "}
          </Col>
        </Row>
      </Container>
      <Container className="mt-5" fluid>
        <Image src={imageData[15]} className="bg-dark" fluid></Image>
        <h1 className="text-center">Our favourites</h1>
        <Row>
          <Col>
            <h1>Fodds</h1>
            <h3>
              breakfast<span>50</span>
            </h3>
            <h3>
              lunch<span>60</span>
            </h3>{" "}
            <h3>
              dinner<span>50</span>
            </h3>
          </Col>
          <Col>
            <h1>Drink</h1>
            <h3>
              beer <span>233</span>
            </h3>
            <h3>
              areke <span>23</span>
            </h3>
            <h3>
              tela <span>233</span>
            </h3>
          </Col>
        </Row>

        <button className="btn btn-success">our fullMenu</button>
      </Container>
      <Container fluid>
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
      <Container className="bg-dark" fluid>
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
    </>
  );
};

export default Home;
