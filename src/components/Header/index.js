import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
          <Container>
            <Navbar.Brand href="#home">GQS Converter</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="end-0"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end flex-grow-1">
                    <NavDropdown eventKey={3} title="Conversores" id="basic-nav-dropdown">
                      <NavDropdown.Item eventKey={3.1} href="/moeda">Moeda</NavDropdown.Item>
                      <NavDropdown.Item eventKey={3.2} href="/medida">Medida</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavComponent;