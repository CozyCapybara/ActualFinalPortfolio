import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Switch, Route, Link} from 'react-router-dom';

//import styles from './Navbar.module.css';
// Navbar from react-bootstrap

export function NavbarItem() {


    return (
      <Navbar style={{paddingTop: '1px'}} collapseOnSelect expand="md" bg="transparent" variant ="light">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" style={{ fontSize: '20px'}} href="/">CozyCapybara</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav style={{ fontSize: '20px'}}>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to='/About'>About Me</Nav.Link>
              <NavDropdown align="end" title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item style={{ fontSize: '20px'}} >
                  <Nav.Link as={Link} to='/ResponsiveRedesign'>Responsive Redesign</Nav.Link> 
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: '20px'}}>
                  <Nav.Link as={Link} to='/IterativeDesign'>Iterative Design</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: '20px'}}>
                  <Nav.Link as={Link} to='/ABTesting'>Eyetracking</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: '20px'}}>
                  <Nav.Link as={Link} to='/Development'>Development</Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavbarItem;