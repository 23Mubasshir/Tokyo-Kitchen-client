import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Services = () => {
  return (
    <div className="my-5">
      <h1 className="mt-4 text-center text-light py-3 bg-dark
        ">Our Services</h1>
      <Row xs={1} md={2} lg={4} className="g-4 m-5">
        <Col>
          <Card style={{ height: "350px" }}>
            <Card.Body className="card-bg">
              <Card.Title>
                <h2 className="display-5 text-center mt-4 mb-3">Hire Chefs</h2>
                <hr />
              </Card.Title>
              <Card.Text className="mx-4 text-center small">
                We provide Best chefs from Japan. Anyone can Book Our services
                for their events.Simply you have to email us to proceed. So
                email and contact us to get the best chefs in Japan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ height: "350px" }}>
            <Card.Body className="card-bg">
              <Card.Title>
                <h2 className="display-5 text-center mt-4 mb-3">
                  Free Recipes
                </h2>
                <hr />
              </Card.Title>
              <Card.Text className="mx-4 text-center small">
                We provide Best free recipes Japan. Anyone can get Our free recipes
                for their events. Simply you have to visit our website. So
                email and contact us to get the best chefs in Japan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>

          <Card style={{ height: "350px" }}>
            <Card.Body className="card-bg">
              <Card.Title>
                <h2 className="display-5 text-center mt-4 mb-3">
                  Everyday Blog
                </h2>
                <hr />
              </Card.Title>
              <Card.Text className="mx-4 text-center small">
                There is a Blog section where you will find daily blogs from top japanese chefs. You can simply follow the blogs and make your own dish. But the blog and recipes are premium so you have to subscribe for it.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ height: "350px" }}>
            <Card.Body className="card-bg">
              <Card.Title>
                <h2 className="display-5 text-center mt-4 mb-3">Easy Method</h2>
                <hr />
              </Card.Title>
              <Card.Text className="mx-4 text-center small">
                Our Blogs recipes and instruction is very easy to follow and cook. Anyone can cook by following the instruction from our daily blogs.
                Also all the ingredient are presents in our blog.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
