import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";


export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger ">
      <Container>
        <Link className="Lead text-light nav-link" to="/">
          <Navbar.Brand className="Lead" text-light   > <i>MiEntrada.uy</i></Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link text-light" to="/comofunciona">¿Cómo Funciona?</NavLink>
            <Nav.Link className="nav-link text-light" href="#features">Música</Nav.Link>
            <Nav.Link className="nav-link text-light" href="#pricing">Teatro</Nav.Link>

          </Nav>
          <Nav>
            <NavLink className="nav-link" to="/cart"><CartWidget /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}







