import { Navbar, Container, Nav, Offcanvas, Form, FormControl, Button } from "react-bootstrap";
import React from "react";

export default function NavBar() {
  return (
    <Navbar bg="primary" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">TUENTRADA.UY</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">¿A dónde quieres ir?</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Concierto</Nav.Link>
              <Nav.Link href="#action2">Cine</Nav.Link>
              <Nav.Link href="#action3">Teatro</Nav.Link>


            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Busca tu evento aquí"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}







