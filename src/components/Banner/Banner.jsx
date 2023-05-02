import React from "react";
import './Banner.css';
import { Container, Row, Col} from 'react-bootstrap';

const Banner = () => {
  return (
    <div className="banner-wrapper">
    <Container fluid className="p-0">
      <Row>
        <Col xs={12}>
          <div className="banner-content mb-5 pb-md-5">
            <h1 className="mb-2 brand-name">TOKYO KITCHEN</h1>
            <p className="h4" >"Bringing the Flavors of Japan to Your Kitchen."</p>
            <button className="btn btn-lg btn-dark mt-lg-5 mt-2">Learn More</button>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
        );
};

export default Banner;
