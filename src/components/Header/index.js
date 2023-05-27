import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
          <Container>
            <Navbar.Brand href="#home">GQS Converter</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="end-0"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end flex-grow-1">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavComponent;