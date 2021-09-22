import React from "react";
import Header from "../../components/Header";
import "./style.scss";
import { Col, Container, Row } from "reactstrap";
import CartSubject from "../../components/Card";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PaginationComponent from "../../components/Pagination";

export default function HomePage() {
  return (
    <>
      <Header />
      <hr />
      <Container>
        <Row>
          <Col sm="2"></Col>
          <Col sm="8">
            <Row className="mb-5">
              <Col sm="6">
                <CartSubject />
              </Col>
              <Col sm="6">
                <CartSubject />
              </Col>
            </Row>
            <Row className="mb-5">
              <Col sm="6">
                <CartSubject />
              </Col>
              <Col sm="6">
                <CartSubject />
              </Col>
            </Row>
            <Row className="mb-5">
              <Col sm="6">
              </Col>
              <Col sm="6">
                <PaginationComponent />
              </Col>
            </Row>
          </Col>
            <Col sm="2"></Col>
          </Row>
          
        </Container>
        </>
  );
}
