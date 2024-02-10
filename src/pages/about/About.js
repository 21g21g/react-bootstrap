import React from "react";
import { Col, Container, Row, Image, Button, Card } from "react-bootstrap";
import { imageData } from "../../HotelData";
import ImageGallery from "../../components/ImageGallery";
const About = () => {
  return (
    <>
      <Container className="mt-5" fluid>
        <Image src={imageData[2]} fluid />
        <h1 className="text-center">About</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          eleifend leo. Suspendisse potenti. Nulla facilisi. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Integer nec mauris eget purus dignissim fermentum.
          Fusce nec feugiat sapien. Nullam non tellus eget nibh fermentum
          faucibus id in metus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Maecenas dignissim aliquet
          magna, eu accumsan justo dignissim vel. Suspendisse vel nulla ex. Cras
          auctor diam id libero aliquet lobortis.{" "}
        </p>
        <Row>
          <Col>
            <Image src={imageData[0]} fluid />
          </Col>
          <Col>
            <Image src={imageData[1]} fluid />
          </Col>
        </Row>
        <p className="mt-4">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          eleifend leo. Suspendisse potenti. Nulla facilisi. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>
        <ImageGallery />
      </Container>
      <Container className="bg-white">
        <h1 className="text-center">Reviews</h1>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed ut eleifend leo.
                  </p>
                  <div className="bg-bright">
                    <Row>
                      <Col>
                        {" "}
                        <Image src={imageData[16]} fluid rounded />
                      </Col>
                      <Col>
                        {" "}
                        <span>gebeyehu assega</span>
                      </Col>
                    </Row>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed ut eleifend leo.
                  </p>
                  <div className="bg-bright">
                    <Row>
                      <Col>
                        {" "}
                        <Image src={imageData[15]} fluid rounded />
                      </Col>
                      <Col>
                        {" "}
                        <span>habtamu fentahun</span>
                      </Col>
                    </Row>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed ut eleifend leo.
                  </p>
                  <div className="bg-bright">
                    <Row>
                      <Col>
                        {" "}
                        <Image src={imageData[14]} fluid rounded />
                      </Col>
                      <Col>
                        {" "}
                        <span>hailelul baye</span>
                      </Col>
                    </Row>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed ut eleifend leo.
                  </p>
                  <div className="bg-bright">
                    <Row>
                      {" "}
                      <Col>
                        {" "}
                        <Image src={imageData[13]} fluid rounded />
                      </Col>
                      <Col>
                        <span>eyuel kassahun</span>
                      </Col>
                    </Row>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
