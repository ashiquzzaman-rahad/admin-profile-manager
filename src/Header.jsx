import React from "react"
import './Header.css'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersonVcard, Search } from "react-bootstrap-icons";

function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="d-flex justify-content-center w-100 navbar navbar-dark bg-dark ">
                <Container>
                    <PersonVcard color="white" size={40} />
                    <Navbar.Brand href="#home">Online Profile Manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <form className="form-inline">
                                <div className="d-flex gap-3">
                                    <input className="form-control mr-2" type="search" placeholder="Search User" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Search color="white" size="20" /></button>
                                </div>
                            </form>
                            <Nav.Link href="./admin_dashboard">Home</Nav.Link>
                            <Nav.Link href="./notification">Notifications</Nav.Link>
                            <Nav.Link href="./report">Reports</Nav.Link>
                            <Nav.Link href="#link">Messages</Nav.Link>
                            <NavDropdown title="Admins" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Admin Panel</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Add Admin</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Remove Admin</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    )
};

export default Header;