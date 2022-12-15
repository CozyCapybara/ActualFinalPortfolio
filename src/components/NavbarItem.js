import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import styles from './Navbar.module.css';
// Navbar from react-bootstrap

export function NavbarItem() {


    return (
      <Navbar style={{paddingTop: '1px'}} collapseOnSelect expand="md" bg="transparent" variant ="light">
        <Container fluid>
          <Navbar.Brand style={{ fontSize: '20px'}} href="/">CozyCapybara</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav style={{ fontSize: '20px'}}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href='/About'>About Me</Nav.Link>
              <NavDropdown align="end" title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item style={{ fontSize: '20px'}} href="/ResponsiveRedesign">Responsive Redesign</NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: '20px'}} href="/IterativeDesign">Iterative Design</NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: '20px'}} href="/ABTesting">Eyetracking</NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: '20px'}} href="/Development">Development</NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavbarItem;