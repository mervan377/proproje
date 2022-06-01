import { Container, Row, Col, Card } from "react-bootstrap";
import Foter from "./Footer";

const Projects = () => {
  return (
    <>
      <Container fluid className="" id="projelerimiz">
        <Container>
          <Row className="text-center">
            <Col>
              <div className="section-title">
                <h2>
                  Neler <strong> Yaptık </strong>
                </h2>
                <p> Yaptıklarımız yapacaklarımızın teminatıdır. </p>
              </div>
            </Col>
          </Row>

          <Row className="projeler-row">
            <Col sm={3}>
              <Card className="bg-dark text-white">
                <Card.Img
                  src={
                    process.env.PUBLIC_URL +
                    "projeler/beton/1adaletbakgolbasi/golbasi(0).JPG"
                  }
                  alt="Card image"
                />
                <Card.ImgOverlay className="card-content">
                  <Card.Title>Antalya Manavgat Otel</Card.Title>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm={3}>
              <Card className="bg-dark text-white">
                <Card.Img
                  src={
                    process.env.PUBLIC_URL +
                    "projeler/beton/1adaletbakgolbasi/golbasi(1).JPG"
                  }
                  alt="Card image"
                />
                <Card.ImgOverlay className="card-content">
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm={3}>Selam 3</Col>
            <Col sm={3}>Selam 4</Col>
          </Row>
        </Container>
      </Container>
      <Foter />
    </>
  );
};
export default Projects;
