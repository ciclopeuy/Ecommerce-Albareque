import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";


export default function NavBar() {



  return (
    <Navbar collapseOnSelect expand="lg" bg="danger ">
      <Container>
        <Link className="Lead text-light nav-link" to="/">
          <Navbar.Brand className="Lead text-warning"   > <i>MiEntrada.uy</i></Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link text-light" to="/categoria/musica">Música</NavLink>
            <NavLink className="nav-link text-light" to="/categoria/teatro">Teatro</NavLink>

          </Nav>
          <Nav>
            <NavLink className="nav-link" to="/cart"><CartWidget /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}







