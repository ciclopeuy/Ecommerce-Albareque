import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";


export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger ">
      <Container>
        <Navbar.Brand className="Lead" text-light href="#home"> <i>MiEntrada.uy</i> </Navbar.Brand>
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







