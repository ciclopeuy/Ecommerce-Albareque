import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";


export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
      <Container>
        <Navbar.Brand href="#home">MIENTRADA.UY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Música</Nav.Link>
            <Nav.Link href="#pricing">Teatro</Nav.Link>
            <Nav.Link href="#pricing">Otros</Nav.Link>
          </Nav>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}







