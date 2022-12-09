import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import styles from './Navbar.module.css';
// Navbar from react-bootstrap

export function NavbarItem() {


    return (
      <Navbar  collapseOnSelect expand="sm" bg="transparent" variant ="light">
        <Container fluid>
          <Navbar.Brand href="/">CozyCapybara</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href='/About'>About Me</Nav.Link>
              <NavDropdown align="end" title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/ResponsiveRedesign">Responsive Redesign</NavDropdown.Item>
                <NavDropdown.Item href="/IterativeDesign">Iterative Design</NavDropdown.Item>
                <NavDropdown.Item href="/ABTesting">A/B Testing</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavbarItem;