import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">My Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">My Shop</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav.Item className="justify-content-end flex-grow-1 pe-3">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item className="justify-content-end flex-grow-1 pe-3">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </Nav.Item>
                    <Nav.Item className="justify-content-end flex-grow-1 pe-3">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </Nav.Item>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Header