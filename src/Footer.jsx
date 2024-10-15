import React from "react"
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className=" bg-dark text-center text-lg-start border-top text-white mt-3">
      <Container className="p-4">
        <Row>
          <Col>
            <div className="d-flex justify-content-center align-center">
              <p>Developers Team Hotline: <a href="tel:+1234567890" className="text-decoration-none text-white">+123-456-7890</a></p>
              <p className="mx-auto">Email: <a href="mailto:devteam@example.com" className="text-decoration-none text-white">devteam@example.com</a></p>
              <p>Last Maintenance: September 24, 2024</p>
            </div>
            <p className="text-center">&copy; 2024 Online Profile Manager. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;