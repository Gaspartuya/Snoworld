import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBar() {

    return (


        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">Snoworld</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Mis compras</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Snowboards</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> Botas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ski</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"> Ver todos los productos</NavDropdown.Item>
            </NavDropdown>
            
            </Nav>
            <CartWidget />
        </Navbar.Collapse>
        </Container>
        
        </Navbar>

        )

}

export default NavBar