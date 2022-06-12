import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
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
          </Nav>
          <Nav>
            <Dropdown className="m-2">
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                Seleccione la Categoría
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item ><NavLink className="nav-link" to="/categoria/musica">Música</NavLink></Dropdown.Item>
                <Dropdown.Item ><NavLink className="nav-link" to="/categoria/teatro">Teatro</NavLink></Dropdown.Item>
                <Dropdown.Item ><NavLink className="nav-link" to="/categoria/deportes">Deportes</NavLink></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <NavLink className="nav-link" to="/cart"><CartWidget /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
